import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { Media } from './entities/media.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MediaService {

  constructor(
    @InjectRepository(Media) private readonly mediaRepository:Repository<Media>
  ) {}

  createpost(createMediaDto: CreateMediaDto) {
    const savePost = new this.mediaRepository(createMediaDto);
    savePost.save();
    // return 'This action adds a new media';
  }

  async findAll() {
    try {
      const findAll = await this.mediaRepository.find();
      return findAll;
    } catch (error) {
      throw new NotFoundException('Failed to Retrieve post');
    }
    // return `This action returns all media`;
  }

  findOne(id: number) {
    return `This action returns a #${id} media`;
  }

  async updatepost(title: string, updatepost) {
    try {
      const updatePost = await this.mediaRepository.findOne(title);

      if (!updatePost) {
        throw new NotFoundException(`post with not found`);
      }

      Object.assign(updatepost, updatepost);

      await updatepost.save();
      return updatepost;
    } catch (error) {
      throw new NotFoundException(`Failed to Update post with the title`);
    }
  }

  async  deleteSale(title: string){
    try {
      const deleteIt = await this.mediaRepository.delete(title);
      if(!deleteIt) {
        throw new NotFoundException(`Sale with ID ${title} not found`);
      }
      return deleteIt

    }catch (error) {
      throw new NotFoundException(`Item not found`);
    }
  }
}
