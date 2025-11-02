var blogContainer = document.getElementById('blog-container');
var blogs = [
    {
        title: "My Car",
        date: "2025-11-01",
        description: "I have a 2015 Infiniti q50. I've only done cosmetic mods to it, no performance. I currently have it wrapped in a Glossy Gold Puprle color as the bottom half and a Sparkly Black color as the top half. It is sitting on Aodhand DS02's, 19x9.5 +22 all around. It's also on Airlift 3P. I also have carbon fiber pieces such as mirror caps and the trunk. Additionally, it just had side skirts, front lip, diffuser, diffuser extensions, and a rear-window spoiler. Also, the headlights are retrofitted!",
        image: "images/IMG_7757.jpg",
        imageAlt: "Car Picture",
        slug: "my-first-bootcamp-post",
    },
    {
        title: "New Wheels for My q50!",
        date: "2025-11-01",
        description: "I recently bought some new wheels which I am excited to put on! They are Work VSKF's which were my dream wheels and I am happy to finally own some. However, I did buy them despite them having a flaw, one of the wheel's inner barrel was cracked. The good thing about these wheels is that they are three pieces so I only need to buy the replacement piece and not an entire wheel; inner barrel, outer barrel, center(face). I plan on chroming them out too, since that is my preferred finish on wheels!",
        image: "images/IMG_0420.jpg",
        imageAlt: "Gray VSKF's",
        slug: "new-wheels-for-my-q50",
    },
];
blogs.forEach(function (blog) {
    var blogElement = document.createElement("div");
    blogElement.className = "blog-card";
    var title = document.createElement("h2");
    title.className = "blog-title";
    title.textContent = blog.title;
    title.innerHTML = "<a href=\"blogs/".concat(blog.slug, ".html\">").concat(blog.title, "</a>");
    var date = document.createElement("p");
    date.className = "blog-date";
    date.textContent = blog.date;
    var image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;
    image.className = "blog-image";
    var description = document.createElement("p");
    description.className = "blog-description";
    description.textContent = blog.description;
    blogElement.append(title, image, date, description);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogElement);
});
