import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { EncodeController } from './encode.controller';
import { UrlService } from '../services/url/url.service';

describe('EncodeController', () => {
  let encodeController: EncodeController;
  let urlService: UrlService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EncodeController],
      providers: [UrlService],
    }).compile();

    encodeController = app.get<EncodeController>(EncodeController);
    urlService = app.get<UrlService>(UrlService);
  });

  describe('encode', () => {
    it('should not throw an exception', () => {
      const urlDto = { url: 'https://www.google.com' };
      jest.spyOn(urlService, 'createShortenedUrl').mockReturnValue('');
      expect(() => encodeController.encode(urlDto)).not.toThrow();
    });

    it('should return a 400 if no url is provided', async () => {
      jest.spyOn(urlService, 'createShortenedUrl').mockReturnValue('');
      const urlDto = { url: '' };
      // check response has a status of 400
      expect(() => encodeController.encode(urlDto)).toThrow(
        BadRequestException,
      );
      expect(() => encodeController.encode(urlDto)).toThrow('No URL provided');
    });

    it('should return a shortenedUrl which is a string and not the same as the original url', async () => {
      jest.spyOn(urlService, 'createShortenedUrl').mockReturnValue('');
      const urlDto = { url: 'https://www.google.com' };
      const response = await encodeController.encode(urlDto);
      expect(typeof response.shortenedUrl).toBe('string');
      expect(response.shortenedUrl).not.toBe(urlDto.url);
    });

    it('should call the urlService.createShortenedUrl method', async () => {
      const urlDto = { url: 'https://www.google.com' };
      const spy = jest
        .spyOn(urlService, 'createShortenedUrl')
        .mockReturnValue('');
      await encodeController.encode(urlDto);
      expect(spy).toHaveBeenCalled();
    });
  });
});
