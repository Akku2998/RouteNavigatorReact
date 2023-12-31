import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { authorData } from "../AllData/AuthorData";

const AuthorDetails = () => {
  const params = useParams();
  const [userObj, setUserObj] = useState({});

  useEffect(() => {
    const author = authorData.find((obj) => obj.Id === params.authorId);
    setUserObj(author);
  }, []);

  return (
    <>
      <div className="py-20 px-4 flex flex-wrap justify-center ">
        {userObj && (
          <div className="box-border mt-[-50px]">
            <div className="box-shadow-md mx-auto text-center font-arial bg-black bg-opacity-80 text-white h-48 w-96 flex justify-center items-center flex-col">
              <h2 className="text-4xl font-bold mb-2">{userObj.name}</h2>
              {userObj.description &&
                userObj.description.map((descriptionItem) => (
                  <div key={descriptionItem.name} className="mt-2">
                    <p className="text-lg text-gray-600 whitespace-nowrap mb-5">Mobile: {descriptionItem.mobile}</p>
                    <p className=" text-lg whitespace-nowrap mb-5">POSTS: {descriptionItem.post}</p>
                    <p className="text-lg whitespace-nowrap ">LIKES: {descriptionItem.like}</p>
                  </div>
                ))}
            </div>

            <div className=" flex justify-left">
              <h1 className="py-10 text-3xl  text-black-100  bg-clip-text text-left">
                Posts
              </h1>
            </div>
            <div className="relative inline-flex items-center justify-center p-6 w-full text-center rounded-md ">
              <button className="text-white text-xl font-bold bg-blue-500 border border-blue-500 px-4 w-60 h-12 ">
                Assending By date
              </button>
              <button className="text-white text-xl font-bold bg-blue-500 border border-blue-500 px-4 w-60 h-12">
                Decending By date
              </button>
              <button className="text-white text-xl font-bold bg-blue-500 border border-blue-500 px-4 w-60 h-12">
                Assending By Like
              </button>
              <button className="text-white text-xl font-bold bg-blue-500 border border-blue-500 px-4 w-60 h-12">
                Decending By Like
              </button>
            </div>




            {userObj.description &&
              userObj.description.map((descriptionItem) => (
                <div key={descriptionItem.name}>
                  <h3>{descriptionItem.name}</h3>
                  <p>Mobile: {descriptionItem.mobile}</p>
                  <p>Post: {descriptionItem.post}</p>

                  {descriptionItem.posts &&
                    descriptionItem.posts.map((post) => (
                      <div key={post.Id}>
                        <h4>{post.name}</h4>
                        <p>Date: {post.date}</p>
                        <p>Likes: {post.likes}</p>

                        {/* {post.comments &&
                          post.comments.map((comment) => (
                            <div key={comment.Id}>
                              <p>Comment: {comment.comment}</p>
                              <p>Author: {comment.author}</p>
                              <p>Date: {comment.date}</p>
                            </div>
                          ))}*/}
                      </div>
                    ))}
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};


export default AuthorDetails;