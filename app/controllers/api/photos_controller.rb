class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all
    if(params[:user_id])
      @photos = @photos.where(user_id: params[:user_id])
    end
    #join photos with tags
    #find photos with tag names that are in the provided list of tags
    if(params[:tag_names])
      @photos = Photo.select("DISTINCT photos.*").joins(:taggings).joins(:tags).where("tags.name IN (?)", params[:tag_names])
    end
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
