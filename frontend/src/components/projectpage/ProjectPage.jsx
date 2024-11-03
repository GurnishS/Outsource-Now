import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon

import { faPlay } from '@fortawesome/free-solid-svg-icons';


function ProjectsPage() {

    const projects = [{
        "url": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
        "title": "Project1",
    },

    {
        "url": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
        "title": "Project2",
    },
    {
        "url": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
        "title": "Project3",
    },
    {
        "url": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
        "title": "Project4",
    },
    {
        "url": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
        "title": "Project5",
    },
    {
        "url": "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
        "title": "Project6",
    },
    ]

    return (
        <div className="flex flex-col">
            <div className="bg-gray-400 h-48 sm:h-64 md:h-80 lg:h-96">
                <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=4004" className="w-full object-cover h-full opacity-80" />
                <div className="relative bottom-16 md:bottom-28 md:px-8 text-white px-4 text-xs md:text-sm ">
                    <FontAwesomeIcon icon={faPlay} className="mr-2" /> OUR SERVICES {/* Replace <i> with FontAwesomeIcon */}
                </div>
                <h2 className="relative bottom-12 md:bottom-24 md:px-8 text-white px-4 text-lg md:text-4xl">We Build amazing products</h2>
            </div>
            <div className="flex colums-3 flex-wrap p-2 md:p-8">
                {projects.map((project)=>(<div className='w-1/3'>
                    <img src={project.url} className="object-cover h-24 w-full p-1 sm:h-40 md:h-64 lg:h-80 md:p-2 md:hover:p-3 ease-out duration-700" />
                    <h3 className='relative bottom-6 text-gray-50 text-xs left-2 md:bottom-12 md:left-8'>{project.title}</h3>
                </div>
                ))}    
            
            </div>
            <div className="bg-lime-400 flex items-center justify-center min-h-36 md:min-h-48">
                <div className="text-center">
                    <h1 className="text-xl md:text-3xl font-light text-black mb-4 md:mb-8 pop">
                        Get an estimate for your upcoming project
                    </h1>
                    <button className="bg-black text-lime-400 py-2 px-4 text-sm font-bold pop">
                        CONTACT
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage;