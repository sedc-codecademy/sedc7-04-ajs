$.ajax({
    url:"http://example/getusers",
    success:function(users){
    	let userId = users[1].id;
    	
    	$.ajax({
		    url:"http://example/getuser",
		    success:function(user){
		    	let userData = user;
		    	
		    	$.ajax({
				    url:"http://example/getposts",
				    success:function(posts){
				    	let postId = posts[0].id;
				    	
				    	$.ajax({
						    url:"http://example/getlink",
						    success:function(link){
						    	let linkUrl = link;
						    	
						    	$("div.postLink").text(linkUrl);
						    },
						    
						});
				    },
				    
				});
		    },
		    
		});
    },
    
});

//nohell version

function postLinkCB(linkUrl)
{
	$("div.postLink").text(linkUrl);
}

function getPostLink(postId)
{
	$.ajax({
		    url:"http://example/getlink",
		    success: postLinkCB
	})
}

function postsCB(posts)
{
	let allPosts = posts;
	getPostLink(allPosts[0])
}

function getPosts(userData)
{
	$.ajax({
	    url:"http://example/getposts",
	    success: postsCB
	})
}

function userDataCB(user)
{
	let userData = user;
	getPosts();
}

function getUserData(userId)
{
	$.ajax({
		    url:"http://example/getuser",
		    success: userDataCB
	});
}

function usersCB(users)
{
	let userId = users[1].id;
	getUserData(userId);
}

$.ajax({
    url:"http://example/getusers",
    success: usersCB
});