import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { title } from 'process';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post('post')
  create(@Body() createMediaDto: CreateMediaDto) {
    return this.mediaService.createpost(createMediaDto);
  }

  @Get()
  findAll() {
    return this.mediaService.findAll();
  }

  @Get(':title')
  findOne(@Param('title') title: string) {
    return this.mediaService.findOne(title);
  }

  @Patch(':title')
  update(@Param('title') id: string, @Body() updateMediaDto: UpdateMediaDto) {
    return this.mediaService.updateProductByName(title, updateMediaDto);
  }

  @Delete(':title')
  async remove(@Param('title') title: string) {
  return await this.mediaService.deletePost(title)
  }
}
