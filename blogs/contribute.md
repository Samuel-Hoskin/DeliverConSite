---
layout: post
includeInBreadcrumbs: true
order: 3
title: Contribute a blog
description: How to contribute a blog to the site.
date: 2011-12-21
modified: 2012-12-22
image:
  src: https://cdn.pixabay.com/photo/2015/05/13/22/22/workspace-766045_1280.jpg
  alt: A table with a phone, pen, note pad and laptop out, there is hand with red nail polish hovered over the laptop.
  caption: Getting ready to write a blog
author:
  name: Sam Hoskin
  url: https://twitter.com/Samuel_Hoskin

tags:
  - blog
---

So you are thinking about uploading a blog to site. Well first thank you for contributing your thoughts and ideas to the community!

This site works off of markdown files that are then transformed in to html thought a static site generator. 

To contribute a post, you will need to make a markdown file.

The easiest way to do this is to head over to this [GitHub Repository](https://github.com/Samuel-Hoskin/DeliverConSite), click in to `blogs` folder, then `Add file` + `Create new file`.

Name the file `[YourBlogTitle].md` with no spaces, then copy the below in to the text editor.

```markdown
---

layout: post
includeInBreadcrumbs: true
order: 3
title: [title of your blog]
description: [Short description of your post]
date: [Date you wrote/upload your post. YYYY-MM-DD format (Required)]

modified: [Date you modified your post. YYYY-MM-DD format (Required)]

image:
  src: [Link to blog header image (Optional)]
  alt: [Alt text for picture (Required if have a picture)]
  caption: [Caption for underneath the photo (Required if have a picture)]

author:
  name: [Your Name]
  url: [Link to your Twitter/LinkedIn/Website etc (Optional)]

tags:
  - blog
---

[Start Writing you blog post here]

```

Remove and amend the box brackets as applicable and then you can write / upload your blog. If you have never written in markdown before you can use this [cheat sheet](https://www.markdownguide.org/cheat-sheet/) to help you.