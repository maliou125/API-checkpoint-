import React from 'react';
import "./App.css";

const UserList = ({user}) => {
  return (
    <>
      

	<div class="top-icons">
		<i class="fas fa-long-arrow-alt-left"></i>
		<i class="fas fa-ellipsis-v"></i>
		<i class="far fa-heart"></i>
	</div>

	<div class="profile">
		
		<div class="check"><i class="fas fa-check"></i></div>
		<h3 class="name">{user.name}</h3>
		<p class="title">{user.username}</p>
		<p class="description">{user.address.street}</p>
    <p>{user.address.geo.lat}</p>
		<button type="button" class="btn"></button>
	</div>

	<div class="social-icons">
		<div class="icon">
			<a href="/"><i class="fab fa-dribbble"></i></a>
			
		</div>

		
		</div>

		

    </>
  )
}

export default UserList
