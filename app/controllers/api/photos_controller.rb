class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all
  end

  def show
    @photo = Photo.find_by_id(params[:id])
    if(@photo)
      render :show
    else
      render json: ["No photo found"], status: 404
    end
  end

  def create
    @photo = Photo.new(photo_params)
    if(@photo.save)
      render :show
    else
      render json: @photo.errors, status: 422
    end
  end

  def update
    @photo = Photo.find_by_id(params[:id])
    if(@photo.update(photo_params))
      render :show
    else
      render json: ["No photo found"], status: 404
    end
  end

  def destroy
    @photo = Photo.find_by_id(params[:id])
    if(@photo)
      @photo.destroy
      render :show
    else
      render json: {base: ['Photo not found!']}, status: 404
    end
  end

  def photo_params
    params.require(:photo).permit(:title, :description, :public, :url, :user_id, :album_id)
  end
end
