import {Module} from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import {TrackModule} from "./track/track.module";


@Module({
    imports:[
        TrackModule,
        MongooseModule.forRoot('mongodb://admin:Jhjxbvfhe4210@cluster0-shard-00-00.q5vex.mongodb.net:27017,cluster0-shard-00-01.q5vex.mongodb.net:27017,cluster0-shard-00-02.q5vex.mongodb.net:27017/musicApp?ssl=true&replicaSet=atlas-10zvjz-shard-0&authSource=admin&retryWrites=true&w=majority')
    ]
})
export class AppModule {

}