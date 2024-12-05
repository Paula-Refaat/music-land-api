import { Module } from '@nestjs/common';
// import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { config } from './config';
import { AuthModule } from './modules/auth/auth.module';
import { ProfileModule } from './modules/profile/profile.module';
import { ArtistModule } from './modules/artist/artist.module';
import { MusicianModule } from './modules/musician/musician.module';
import { FavoriteModule } from './modules/favorite/favorite.module';
import { PlaylistModule } from './modules/playlist/playlist.module';
import { MusicModule } from './modules/music/music.module';
import { AlbumModule } from './modules/album/album.module';
import { MusicianAlbumModule } from './modules/musician-album/musician-album.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    // TypeOrmModule.forRoot(config.db as TypeOrmModuleOptions),
    DatabaseModule,
    AuthModule,
    ProfileModule,
    ArtistModule,
    MusicianModule,
    FavoriteModule,
    PlaylistModule,
    MusicModule,
    AlbumModule,
    MusicianAlbumModule,
    NotificationsModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
