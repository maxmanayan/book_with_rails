class BooksController < ApplicationController

  def app
    render component: "App"
  end

  def index
    @books = Book.all

    render json: @books
  end

  def create
    @book = Book.new(book_params)

    if @book.save
      render json: @book
    else
      render json: ("error")
    end
  end


  def destroy
    @book = Book.find(params[:id])

    @book.destroy
  end

  def update
    @book = Book.find(params[:id])

    @book.update(book_params)
    render json: @book
  end

  private

  def book_params
    params.require(:book).permit(:title, :author)
  end

end
