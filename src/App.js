import React from 'react';
import ProfileCard from './components/ProfileCard';
import BlogCard from './components/BlogCard';
import Form from './components/Form';
import './styles.css';
const App = () => {
  return (
    <div>
      <h1>Profile Card</h1>
      <ProfileCard
        name="John Doe"
        image="https://steamuserimages-a.akamaihd.net/ugc/937183464613041522/1502AC745AF67961E80384F4EF26DD2B901ADFC3/"
        description="A software developer from San Francisco."
      />

      <h1>Blog Card</h1>
      <BlogCard
        title="Understanding React Props"
        description="A deep dive into how props work in React."
        imageUrl="https://danielsousadev.gallerycdn.vsassets.io/extensions/danielsousadev/react-essential-snippets/2.11.0/1601163453320/Microsoft.VisualStudio.Services.Icons.Default"
      />
      <h1>Form with Validation</h1>
      <Form />
    </div>
  );
};

export default App;