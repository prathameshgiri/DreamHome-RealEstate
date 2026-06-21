import AgentCard from '../components/agent/AgentCard';

const agentsData = [
  {
    id: 1,
    name: 'Aarav Sharma',
    role: 'Senior Luxury Consultant',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    propertiesSold: 124,
    experience: '8 Yrs',
    rating: '4.9'
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Residential Specialist',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    propertiesSold: 89,
    experience: '5 Yrs',
    rating: '4.8'
  },
  {
    id: 3,
    name: 'Vikram Singh',
    role: 'Commercial Director',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    propertiesSold: 210,
    experience: '12 Yrs',
    rating: '5.0'
  },
  {
    id: 4,
    name: 'Neha Gupta',
    role: 'Luxury Property Expert',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    propertiesSold: 156,
    experience: '9 Yrs',
    rating: '4.9'
  },
  {
    id: 5,
    name: 'Rohan Desai',
    role: 'Investment Advisor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    propertiesSold: 67,
    experience: '4 Yrs',
    rating: '4.7'
  },
  {
    id: 6,
    name: 'Ananya Reddy',
    role: 'Penthouse Specialist',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    propertiesSold: 92,
    experience: '6 Yrs',
    rating: '4.9'
  }
];

const Agents = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 font-bold text-sm mb-4">
            Our Team
          </div>
          <h1 className="text-4xl md:text-5xl font-sans font-extrabold text-dark mb-6 leading-tight">Meet Our Elite Luxury Consultants</h1>
          <p className="text-gray-500 font-medium text-lg">Our award-winning team of real estate professionals provides unparalleled expertise and dedicated service to help you find your dream home.</p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {agentsData.map((agent, idx) => (
            <AgentCard key={agent.id} agent={agent} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agents;
