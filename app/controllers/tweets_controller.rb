class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.new(tweet_params)

    if @tweet.save

      respond_to do |format|
        format.html
        format.json { render json: #@tweet
          { message: @tweet.message,
            created_at: @tweet.created_at.strftime('%b %e, %l:%M %p'),
          }
        }
      end

    #   if @tweet.save
    #     redirect_to tweets_path
    #   else
    #     render :index
    #   end
    end

  end

  def destroy
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
