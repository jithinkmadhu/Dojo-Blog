var blogs = [];
let get_title = document.getElementById("title");
let get_body = document.getElementById("body");
let get_author = document.getElementById("author");
let get_edit_button = document.getElementById("edit-btn");
let get_delete_button = document.getElementById("delete-btn");
let get_edit_title = document.getElementById("edit-title");
let get_edit_blog_body = document.getElementById("edit-blog-body");
let get_edit_author = document.getElementById("edit-author");
let get_update_button = document.getElementById("update-button");
let get_each_body = document.getElementById("each-body");
let get_home_body = document.getElementById("home-body");
let get_add_body = document.getElementById("add-body");
let get_edit_body = document.getElementById("edit-body");
let get_blogs_list = document.getElementById("blogs-list");
let get_title_error = document.getElementById("edit-title-error");
let get_body_error = document.getElementById("edit-body-error");
let get_home_button = document.getElementById("home-button");
let get_new_blog_button = document.getElementById("new-blog-button");
let get_each_title = document.getElementById("edit-title");
let get_each_blog_body = document.getElementById("edit-blog-body");
let get_each_author = document.getElementById("edit-author");

function toggle(input) {
  if (input == "Home") {
    get_edit_body.style.display = "none";
    get_add_body.style.display = "none";
    get_each_body.style.display = "none";
    get_home_body.style.display = "block";
    get_new_blog_button.classList.add("nav-button");
    get_home_button.classList.remove("nav-button");

    display();
  } else if (input == "Blog") {
    get_add_body.style.display = "block";
    get_home_body.style.display = "none";
    get_each_body.style.display = "none";
    get_title.value = null;
    get_body.value = null;
    get_author.value = null;
    get_home_button.classList.add("nav-button");
    get_new_blog_button.classList.remove("nav-button");
  }
}
function validate() {
  let title = get_title.value;
  let body = get_body.value;
  let author = get_author.value;

  get_title_error.style.display = "none";
  get_body_error.style.display = "none";

  if (title == null || title == "") {
    get_title_error.style.display = "block";
    get_title_error.innerHTML = "This field can't be empty";
    return false;
  }
  if (body == null || body == "") {
    get_body_error.style.display = "block";
    get_body_error.innerHTML = "This field can't be empty";
    return false;
  }
  if ((body != null || body != "") && (title != null || title != "")) {
    let blog = {
      blog_title: title,
      blog_body: body,
      blog_author: author,
    };
    blogs.push(blog);
    console.log(blogs);
  }
  get_add_body.style.display = "none";
  get_home_body.style.display = "block";
  get_each_body.style.display = "none";
  get_new_blog_button.classList.add("nav-button");
  get_home_button.classList.remove("nav-button");

  display();

  return true;
}
function eachItem(num) {
  document.getElementById("each-blog-title").innerHTML = blogs[num].blog_title;
  document.getElementById("each-blog-author").innerHTML =
    "written by " + blogs[num].blog_author;
  document.getElementById("each-blog-body").innerHTML = blogs[num].blog_body;
  get_home_body.style.display = "none";
  get_each_body.style.display = "block";
  get_delete_button.onclick = function () {
    deleteBlog(num);
  };
  get_edit_button.onclick = function () {
    editBlog(num);
  };

  get_new_blog_button.classList.add("nav-button");
  get_home_button.classList.add("nav-button");
}
function editBlog(num) {
  get_edit_body.style.display = "block";
  get_add_body.style.display = "none";
  get_home_body.style.display = "none";
  get_each_body.style.display = "none";
  get_edit_title.value = blogs[num].blog_title;
  get_edit_blog_body.value = blogs[num].blog_body;
  get_edit_author.value = blogs[num].blog_author;
  get_home_button.classList.add("nav-button");
  get_new_blog_button.classList.add("nav-button");
  get_update_button.onclick = function () {
    update(num);
  };
}

function deleteBlog(num) {
  blogs.splice(num, 1);
  console.log(blogs);
  get_add_body.style.display = "none";
  get_home_body.style.display = "block";
  get_each_body.style.display = "none";
  get_new_blog_button.classList.add("nav-button");
  get_home_button.classList.remove("nav-button");

  display();
}

function update(num) {
  get_edit_body.style.display = "none";
  get_title_error.style.display = "none";
  get_body_error.style.display = "none";

  if (title == null || title == "") {
    get_title_error.style.display = "block";
    get_title_error.innerHTML = "This field can't be empty";
    return false;
  }
  if (body == null || body == "") {
    get_body_error.style.display = "block";
    get_body_error.innerHTML = "This field can't be empty";
    return false;
  }
  if (
    (get_each_blog_body != null || get_each_blog_body != "") &&
    (get_each_title.value != null || get_each_title.value != "")
  ) {
    blogs[num].blog_title = get_each_title.value;
    blogs[num].blog_body = get_each_blog_body.value;
    blogs[num].blog_author = get_each_author.value;
  }
  get_add_body.style.display = "none";
  get_home_body.style.display = "block";
  get_each_body.style.display = "none";
  get_new_blog_button.classList.add("nav-button");
  get_home_button.classList.remove("nav-button");

  display();

  return true;
}

function display() {
  while (get_blogs_list.firstChild) {
    get_blogs_list.removeChild(get_blogs_list.firstChild);
  }

  for (let i = 0; i < blogs.length; i++) {
    const addli = document.createElement("li");
    const innerp1 = document.createElement("p");
    const innerp2 = document.createElement("p");
    const innerpContent1 = document.createTextNode(blogs[i].blog_title);
    const innerpContent2 = document.createTextNode(
      "written by " + blogs[i].blog_author
    );
    innerp1.appendChild(innerpContent1);
    innerp2.appendChild(innerpContent2);
    addli.appendChild(innerp1).className = "pink-color title";
    addli.appendChild(innerp2).className = "author";
    addli.id = i;
    addli.setAttribute("onclick", "eachItem(id)");
    get_blogs_list.appendChild(addli);
  }
}
