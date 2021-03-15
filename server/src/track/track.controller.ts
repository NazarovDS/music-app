import {Controller, Get, Post, Body, Delete} from "@nestjs/common";
import {TrackService} from "./track.service";
import {CreateTrackDto} from "./create-track.dto";
import { Param } from "@nestjs/common";
import {ObjectId} from "mongoose";


@Controller('/tracks')
export class TrackController{
    constructor(private trackService: TrackService) {}

    @Post()
    create(@Body() dto: CreateTrackDto ){
        return this.trackService.create(dto)
    }
    @Get()
    getAll(){
        return this.trackService.getAll()
    }
    @Get(':id')
    getOne(@Param('id') id : ObjectId){
        return this.trackService.getOne(id)
    }
    @Delete(':id')
    delete(@Param('id') id : ObjectId){
        console.log(id + ' delete')
        return this.trackService.delete(id)
    }
}