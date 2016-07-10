class Api::TagsController < ApplicationController
  def index
    @tags = Tag.all
    if(params[:photo_id])
      @tags = Photo.find(params[:photo_id]).tags
    end
  end

  def show
    @tag = Tag.find_by_id(params[:id])
  end

  def create
    @photo = Photo.find_by_id(params[:photo_id])
    @photo.tags.each do |tag|
      if(tag.name == tag_params[:name])
        @tag = tag
        break
      end
    end
    if(@tag)
      render :show
    else
      @tag = Tag.find_by_name(tag_params[:name])
      if(@tag)
        @photo.tags.push(@tag)
        render :show
      else
        @tag = Tag.new(tag_params)
        if(@tag.save)
          @photo.tags.push(@tag)
          render :show
        else
          render json: @tag.errors, status: 422
        end
      end
    end
  end

  def update
    @tag = Tag.find_by_id(params[:id])
    if(params[:photo_id])
      photos = Photo.select("DISTINCT photos.*").joins(:taggings).joins(:tags).where("photos.id != ? AND tags.id = ?", params[:photo_id], params[:id])
      @tag.photos = photos
    end
    if(@tag.update(tag_params))
      render :show
    else
      render json: ["Tag not found"], status: 404
    end
  end

  def destroy
    @tag = Tag.find_by_id(params[:id])
    if(@tag)
      @tag.destroy
      render :show
    else
      render json: {base: ['Tag not found']}, status: 404
    end
  end

  def tag_params
    params.require(:tag).permit(:name)
  end
end
