import { Injectable } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

interface UrlStorage {
  [key: string]: string; // shortenedUrl: originalUrl
}

@Injectable()
export class UrlService {
  private readonly urlStore: UrlStorage = {};

  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  createShortenedUrl(url: string): string {
    const shortenedUrl = this.generateShortenedUrl();
    // this.urlStore[shortenedUrl] = url;
    return shortenedUrl;
  }

  getOriginalUrl(shortenedUrlKey: string): string {
    return this.urlStore[shortenedUrlKey];
  }

  getOriginalUrlFromId(id: string): string {
    return this.urlStore[`${this.getHostNameAndPort()}/${id}`];
  }

  private generateShortenedUrl(): string {
    return `${this.getHostNameAndPort()}/${Math.random()
      .toString(36)
      .substring(2, 8)}`;
  }

  private getHostNameAndPort(): string {
    return 'https://80ea-86-177-128-90.ngrok-free.app';
    const httpAdapter = this.httpAdapterHost.httpAdapter;
    const server = httpAdapter.getHttpServer();
    const addressInfo = server.address();
    const host =
      addressInfo.address == '::'
        ? 'http://localhost'
        : `https://${addressInfo.address}`;
    const port = addressInfo.port;
    return `${host}:${port}`;
  }
}
