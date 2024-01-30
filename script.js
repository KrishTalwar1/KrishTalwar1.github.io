document.addEventListener('DOMContentLoaded', function () {
    const posts = document.querySelectorAll('.post');
	
    function showPost(index) {
        posts[index].classList.add('active');
    }

    function hidePost(index) {
        posts[index].classList.remove('active');
        posts[index].classList.add('remove');
    }

    function removePosts() {
        posts.forEach(post => post.classList.remove('remove'));
    }

    // Set an interval to slide in each post one by one
    let currentIndex = 0;
    const interval = setInterval(function () {
        showPost(currentIndex);
        currentIndex++;

        if (currentIndex === posts.length) {
            clearInterval(interval);

            // After showing all posts, remove them
            setTimeout(removePosts, 1000);
        }
    }, 1000); // Change the interval duration as needed	
});
