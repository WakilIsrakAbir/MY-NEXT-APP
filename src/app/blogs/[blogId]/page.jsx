import React from 'react';

const BlogDetailsPage = async({params}) => {
    const {blogId} = await params;
    console.log("Show me params",blogId);
    return (
        <div>
            <h4 className="text-3xl">Blog Detais Coming Soon</h4>
        </div>
    );
};

export default BlogDetailsPage;