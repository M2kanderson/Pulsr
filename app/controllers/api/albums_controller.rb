class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.all
    if(params[:user_id])
      @albums = @albums.where(user_id: params[:user_id])
    end
    if(params[:photo_id])
      photo = Photo.find_by_id(params[:photo_id])
      @albums = photo.albums
    end
  end

  def show
    @album = Album.find_by_id(params[:id])
  end

  def create
    @album = Album.new(album_params)
    if(@album.save)
      params[:photo_ids].each do |photo_id|
        photo = Photo.find_by_id(photo_id)
        photo.albums.push(@album)
        photo.save
      end
      render :show
    else
      render json: @album.errors, status: 422
    end
  end

  def update
    @album = Album.find_by_id(params[:id])
    if(params[:photo_ids])
      params[:photo_ids].each do |photo_id|
        photo = Photo.find_by_id(photo_id)
        unless(@album.photos.include?(photo))
          @album.photos.push(photo)
        end
      end
    end
    if(@album.update(album_params))
      render :show
    else
      render json: ["Album not found"], status: 404
    end
  end

  def destroy
    @album = Album.find_by_id(params[:id])
    if(@album)
      @album.destroy
      render :show
    else
      render json: {base: ['Album not found']}, status: 404
    end

  end

  def album_params
    params.require(:album).permit(:user_id, :title, :description)
  end
end
