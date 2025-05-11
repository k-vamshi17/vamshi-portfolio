        document.addEventListener('DOMContentLoaded', function() {
            // Mobile Navigation
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            
            hamburger.addEventListener('click', function() {
                navLinks.classList.toggle('active');
            });
            
            // Close mobile menu when clicking a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });
            
            // Navbar scroll effect
            window.addEventListener('scroll', function() {
                const navbar = document.getElementById('navbar');
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
            
            // Create floating AWS icons
            const awsIconsContainer = document.getElementById('awsIcons');
            const awsIcons = [
                'fa-server', 'fa-database', 'fa-bolt', 'fa-network-wired', 
                'fa-cloud', 'fa-shield-alt', 'fa-route', 'fa-layer-group'
            ];
            
            for (let i = 0; i < 20; i++) {
                const icon = document.createElement('i');
                icon.className = 'aws-icon fas ' + awsIcons[Math.floor(Math.random() * awsIcons.length)];
                icon.style.left = Math.random() * 100 + '%';
                icon.style.top = Math.random() * 100 + '%';
                icon.style.animationDelay = Math.random() * 5 + 's';
                icon.style.fontSize = (Math.random() * 1 + 1.5) + 'rem';
                icon.style.opacity = Math.random() * 0.5 + 0.1;
                awsIconsContainer.appendChild(icon);
            }
            
            // Typewriter effect
            const typewriterElement = document.querySelector('.typewriter');
            const texts = [
                "AWS Cloud Engineer", 
                "Python Developer"
            ];
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let typingSpeed = 100;
            
            function typeWriter() {
                const currentText = texts[textIndex];
                
                if (isDeleting) {
                    typewriterElement.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                    typingSpeed = 50;
                } else {
                    typewriterElement.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                    typingSpeed = 100;
                }
                
                if (!isDeleting && charIndex === currentText.length) {
                    isDeleting = true;
                    typingSpeed = 1500; // Pause at end of text
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    typingSpeed = 500; // Pause before typing next text
                }
                
                setTimeout(typeWriter, typingSpeed);
            }
            
            setTimeout(typeWriter, 1000);
            
            // Scroll animations
            const animateOnScroll = () => {
                const elements = document.querySelectorAll('.timeline-item, .project-card, .certification-card');
                
                elements.forEach(element => {
                    const elementPosition = element.getBoundingClientRect().top;
                    const screenPosition = window.innerHeight / 1.3;
                    
                    if (elementPosition < screenPosition) {
                        element.classList.add('visible');
                    }
                });
            };
            
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll(); // Run once on load
            
            // Animate skill bars
            const skillBars = document.querySelectorAll('.skill-progress');
            
            function animateSkillBars() {
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width;
                });
            }
            
            // Wait a bit before animating skills for better effect
            setTimeout(animateSkillBars, 500);
            
            // AWS Service Details
            const serviceElements = document.querySelectorAll('.aws-service');
            const serviceDetail = document.getElementById('serviceDetail');
            const detailTitle = document.getElementById('detailTitle');
            const detailDescription = document.getElementById('detailDescription');
            const detailExperience = document.getElementById('detailExperience');
            const detailProgress = document.getElementById('detailProgress');
            const detailProjects = document.getElementById('detailProjects');
            
            const serviceDetails = {
                ec2: {
                    title: "EC2 - Elastic Compute Cloud",
                    description: "Amazon Elastic Compute Cloud (Amazon EC2) provides scalable computing capacity in the Amazon Web Services (AWS) Cloud. Using Amazon EC2 eliminates your need to invest in hardware up front, so you can develop and deploy applications faster.",
                    experience: "90%",
                    projects: [
                        "3-Tier Architecture for HR",
                        "Scalable Web Application Hosting",
                        "Auto Scaling Implementations"
                    ]
                },
                s3: {
                    title: "S3 - Simple Storage Service",
                    description: "Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. Customers of all sizes and industries can use Amazon S3 to store and protect any amount of data for a range of use cases.",
                    experience: "85%",
                    projects: [
                        "Static Website Hosting",
                        "Data Backup Solutions",
                        "File Storage System"
                    ]
                },
                lambda: {
                    title: "Lambda - Serverless Computing",
                    description: "AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume - there is no charge when your code is not running. With Lambda, you can run code for virtually any type of application or backend service.",
                    experience: "80%",
                    projects: [
                        "Serverless API Backend",
                        "Automated Data Processing",
                        "Event-Driven Applications"
                    ]
                },
                vpc: {
                    title: "VPC - Virtual Private Cloud",
                    description: "Amazon Virtual Private Cloud (Amazon VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define. You have complete control over your virtual networking environment.",
                    experience: "75%",
                    projects: [
                        "Secure Network Architecture",
                        "Multi-Tier Application Networking",
                        "Hybrid Cloud Connections"
                    ]
                },
                rds: {
                    title: "RDS - Relational Database Service",
                    description: "Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks.",
                    experience: "80%",
                    projects: [
                        "HR Database Management",
                        "Aurora Database Implementation",
                        "Database Backup Solutions"
                    ]
                },
                dynamodb: {
                    title: "DynamoDB - NoSQL Database",
                    description: "Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale. It's a fully managed, multi-region, multi-active, durable database with built-in security, backup and restore, and in-memory caching.",
                    experience: "75%",
                    projects: [
                        "High-Performance Data Storage",
                        "Scalable Session Management",
                        "Real-time Analytics"
                    ]
                },
                cloudformation: {
                    title: "CloudFormation - Infrastructure as Code",
                    description: "AWS CloudFormation provides a common language for you to model and provision AWS and third party application resources in your cloud environment. AWS CloudFormation allows you to use programming languages or a simple text file.",
                    experience: "70%",
                    projects: [
                        "Automated Infrastructure Deployment",
                        "Environment Replication",
                        "Disaster Recovery Setup"
                    ]
                },
                route53: {
                    title: "Route 53 - DNS Service",
                    description: "Amazon Route 53 is a highly available and scalable cloud Domain Name System (DNS) web service. It is designed to give developers and businesses an extremely reliable and cost effective way to route end users to Internet applications.",
                    experience: "65%",
                    projects: [
                        "Domain Name Management",
                        "DNS Routing Solutions",
                        "Health Checking and Failover"
                    ]
                }
            };
            
            serviceElements.forEach(service => {
                service.addEventListener('click', () => {
                    const serviceName = service.getAttribute('data-service');
                    const details = serviceDetails[serviceName];
                    
                    detailTitle.textContent = details.title;
                    detailDescription.textContent = details.description;
                    detailExperience.textContent = details.experience;
                    detailProgress.setAttribute('data-width', details.experience);
                    detailProgress.style.width = details.experience;
                    
                    detailProjects.innerHTML = '';
                    details.projects.forEach(project => {
                        const li = document.createElement('li');
                        li.textContent = project;
                        detailProjects.appendChild(li);
                    });
                    
                    serviceDetail.classList.add('active');
                });
            });
            
            document.querySelector('.close-detail').addEventListener('click', () => {
                serviceDetail.classList.remove('active');
            });
            
            // Contact form submission
            const contactForm = document.getElementById('contactForm');
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                // Here you would typically send the form data to a server
                // For this demo, we'll just show an alert
                alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
                
                // Reset form
                contactForm.reset();
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                });
            });
        });