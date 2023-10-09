document.addEventListener('DOMContentLoaded', function() {
  const resumeCard = document.getElementById('resumeCard');
  const likeButton = document.getElementById('likeButton');
  const dislikeButton = document.getElementById('dislikeButton');

 const resumes = [
        {
            "name": "Grace Lee",
            "phone": "636-915-3255",
            "email": "grace.lee@outlook.com",
            "address": "9620 Pine St, North Haverbrook, WA 99894",
            "bio": "UI/UX expert.",
            "education": "M.Sc. in IT",
            "experience": "8 years at Airbnb",
            "skills": ["Vue", "Kubernetes", "Java", "C++", "CSS"]
        },
        {
          "name": "Liam Nelson",
          "phone": "182-947-6729",
          "email": "liam.nelson@gmail.com",
          "address": "550 Elm St, Capital City, WA 78039",
          "bio": "Mobile app developer.",
          "education": "Certification in Cloud Computing",
          "experience": "8 years at Airbnb",
          "skills": ["HTML", "GCP", "Vue"]
      },
      {
          "name": "Olivia Garcia",
          "phone": "504-214-4254",
          "email": "olivia.garcia@outlook.com",
          "address": "2606 Pine St, Springfield, TX 36474",
          "bio": "Mobile app developer.",
          "education": "MBA in IT",
          "experience": "5 years at Google",
          "skills": ["Ruby", "Angular", "Azure", "React", "C++"]
      },
      {
          "name": "Ava Clark",
          "phone": "518-129-5540",
          "email": "ava.clark@yahoo.com",
          "address": "7971 Pine St, Ogdenville, FL 34877",
          "bio": "IoT expert.",
          "education": "M.Sc. in IT",
          "experience": "5 years at Google",
          "skills": ["Kubernetes", "Python", "Ruby"]
      },
      {
          "name": "Emma Robinson",
          "phone": "948-136-1247",
          "email": "emma.robinson@yahoo.com",
          "address": "6537 Main St, Shelbyville, NY 96349",
          "bio": "Backend mastermind.",
          "education": "Ph.D. in AI",
          "experience": "10 years at Adobe",
          "skills": ["Angular", "JavaScript", "HTML"]
      },
      {
          "name": "Ethan Martinez",
          "phone": "975-661-7022",
          "email": "ethan.martinez@outlook.com",
          "address": "6651 Oak St, Shelbyville, CA 84951",
          "bio": "Mobile app developer.",
          "education": "Diploma in Web Development",
          "experience": "3 years at Facebook",
          "skills": ["Kubernetes", "Vue", "Ruby", "Angular", "Azure", "Docker"]
      }
       
    ];


  let currentResumeIndex = 0;

  function displayResume(resume) {
      resumeCard.innerHTML = `
          <h2>${resume.name}</h2>
          <p>Phone: ${resume.phone}</p>
          <p>Email: ${resume.email}</p>
          <p>Address: ${resume.address}</p>
          <p>Bio: ${resume.bio}</p>
          <p>Education: ${resume.education}</p>
          <p>Experience: ${resume.experience}</p>
          <p>Skills: ${resume.skills.join(', ')}</p>
      `;
  }

  likeButton.addEventListener('click', function() {
      console.log('Liked!');
      nextResume();
  });

  dislikeButton.addEventListener('click', function() {
      console.log('Disliked!');
      nextResume();
  });

  function nextResume() {
      currentResumeIndex++;
      if (currentResumeIndex >= resumes.length) {
          currentResumeIndex = 0;  // loop back to the start
      }
      displayResume(resumes[currentResumeIndex]);
  }

  // Initial load
  displayResume(resumes[currentResumeIndex]);
});




function animateCard(direction) {
  if (direction === 'right') {
      resumeCard.classList.add('swipe-right');
  } else if (direction === 'left') {
      resumeCard.classList.add('swipe-left');
  }

  setTimeout(() => {
      resumeCard.classList.remove('swipe-right', 'swipe-left');
      nextResume();
  }, 500);
}

likeButton.addEventListener('click', function() {
  console.log('Liked!');

  document.body.style.backgroundColor = 'green'; // Set the background color to green

    setTimeout(() => {
        document.body.style.backgroundColor = 'black'; // Set the background color back to black after 2 seconds
    }, 1000);

  animateCard('right');
  

});

dislikeButton.addEventListener('click', function() {
  console.log('Disliked!');

  document.body.style.backgroundColor = 'red'; // Set the background color to green

    setTimeout(() => {
        document.body.style.backgroundColor = 'black'; // Set the background color back to black after 2 seconds
    }, 1000);

  animateCard('left');
  document.body.style.backgroundColor = 'red';
});
