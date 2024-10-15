"use client"
import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin, Clock, BookOpen, Star, DollarSign, ChevronDown, ChevronUp } from 'lucide-react';
import { Range } from 'react-range';

interface TrainingItem {
    id: number;
    title: string;
    category: string;
    duration: string;
    level: string;
    location: string;
    image: string;
    rating: number;
    price: number;
}

const trainingData: TrainingItem[] = [
    { id: 1, title: 'Introduction to React', category: 'Frontend', duration: '2 hours', level: 'Beginner', location: 'New York, NY', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80', rating: 4.5, price: 29.99 },
    { id: 2, title: 'Advanced Node.js', category: 'Backend', duration: '3 hours', level: 'Advanced', location: 'San Francisco, CA', image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&auto=format&fit=crop&w=1474&q=80', rating: 4.8, price: 49.99 },
    { id: 3, title: 'UI/UX Design Principles', category: 'Design', duration: '1.5 hours', level: 'Intermediate', location: 'London, UK', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80', rating: 4.6, price: 39.99 },
    { id: 4, title: 'Data Structures and Algorithms', category: 'Computer Science', duration: '4 hours', level: 'Advanced', location: 'Berlin, Germany', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80', rating: 4.9, price: 59.99 },
    { id: 5, title: 'Introduction to Machine Learning', category: 'Data Science', duration: '2.5 hours', level: 'Intermediate', location: 'Toronto, Canada', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80', rating: 4.7, price: 44.99 },
    { id: 6, title: 'Responsive Web Design', category: 'Frontend', duration: '2 hours', level: 'Beginner', location: 'Sydney, Australia', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80', rating: 4.4, price: 24.99 },
    { id: 7, title: 'Docker and Kubernetes', category: 'DevOps', duration: '3 hours', level: 'Intermediate', location: 'Amsterdam, Netherlands', image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80', rating: 4.8, price: 49.99 },
    { id: 8, title: 'Python for Data Analysis', category: 'Data Science', duration: '2.5 hours', level: 'Beginner', location: 'Tokyo, Japan', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80', rating: 4.6, price: 39.99 },
    { id: 9, title: 'GraphQL API Development', category: 'Backend', duration: '2 hours', level: 'Intermediate', location: 'Paris, France', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80', rating: 4.7, price: 34.99 },
    { id: 10, title: 'Cybersecurity Fundamentals', category: 'Security', duration: '3 hours', level: 'Beginner', location: 'Singapore', image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80', rating: 4.5, price: 29.99 },
];


const Training: React.FC = () => {
    const minPrice = Math.min(...trainingData.map(item => item.price));
    const maxPrice = Math.max(...trainingData.map(item => item.price));

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');
    const [selectedDuration, setSelectedDuration] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedRating, setSelectedRating] = useState(0);
    const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
    const [filteredData, setFilteredData] = useState(trainingData);
    const itemsPerPage = 6;

    const applyFilters = () => {
        const filtered = trainingData.filter((item) => {
            return (
                item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                (selectedCategory === '' || item.category === selectedCategory) &&
                (selectedLevel === '' || item.level === selectedLevel) &&
                (selectedDuration === '' || item.duration === selectedDuration) &&
                (selectedLocation === '' || item.location === selectedLocation) &&
                item.rating >= selectedRating &&
                item.price >= priceRange[0] && item.price <= priceRange[1]
            );
        });
        setFilteredData(filtered);
        setCurrentPage(1);
    };

    useEffect(() => {
        applyFilters();
    }, [searchTerm, selectedCategory]);

    const pageCount = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const categories = Array.from(new Set(trainingData.map((item) => item.category)));
    const levels = Array.from(new Set(trainingData.map((item) => item.level)));
    const durations = Array.from(new Set(trainingData.map((item) => item.duration)));
    const locations = Array.from(new Set(trainingData.map((item) => item.location)));

    return (
        <div className="flex-grow p-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-gray-800">Discover Training Courses</h1>

                <div className="mb-8 bg-gray-50 p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
                        <div className="relative flex-grow mb-4 md:mb-0">
                            <input
                                type="text"
                                placeholder="Search training..."
                                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
                        </div>
                        <div className="relative">
                            <select
                                className="w-full md:w-auto appearance-none bg-white border rounded-lg pl-3 pr-10 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option value="">All Categories</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                            <Filter size={20} className="absolute right-3 top-3.5 text-gray-500 pointer-events-none" />
                        </div>
                    </div>
                    <button
                        className="flex items-center text-indigo-600 hover:text-indigo-800 transition duration-150 ease-in-out"
                        onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                    >
                        {showAdvancedFilters ? <ChevronUp size={20} className="mr-1" /> : <ChevronDown size={20} className="mr-1" />}
                        {showAdvancedFilters ? 'Hide Advanced Filters' : 'Show Advanced Filters'}
                    </button>
                    {showAdvancedFilters && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            <div className="relative">
                                <select
                                    className="w-full appearance-none bg-white border rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                                    value={selectedLevel}
                                    onChange={(e) => setSelectedLevel(e.target.value)}
                                >
                                    <option value="">All Levels</option>
                                    {levels.map((level) => (
                                        <option key={level} value={level}>
                                            {level}
                                        </option>
                                    ))}
                                </select>
                                <BookOpen size={20} className="absolute right-3 top-2.5 text-gray-500 pointer-events-none" />
                            </div>
                            <div className="relative">
                                <select
                                    className="w-full appearance-none bg-white border rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                                    value={selectedDuration}
                                    onChange={(e) => setSelectedDuration(e.target.value)}
                                >
                                    <option value="">All Durations</option>
                                    {durations.map((duration) => (
                                        <option key={duration} value={duration}>
                                            {duration}
                                        </option>
                                    ))}
                                </select>
                                <Clock size={20} className="absolute right-3 top-2.5 text-gray-500 pointer-events-none" />
                            </div>
                            <div className="relative">
                                <select
                                    className="w-full appearance-none bg-white border rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                                    value={selectedLocation}
                                    onChange={(e) => setSelectedLocation(e.target.value)}
                                >
                                    <option value="">All Locations</option>
                                    {locations.map((location) => (
                                        <option key={location} value={location}>
                                            {location}
                                        </option>
                                    ))}
                                </select>
                                <MapPin size={20} className="absolute right-3 top-2.5 text-gray-500 pointer-events-none" />
                            </div>
                            <div className="relative">
                                <select
                                    className="w-full appearance-none bg-white border rounded-lg pl-3 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                                    value={selectedRating}
                                    onChange={(e) => setSelectedRating(Number(e.target.value))}
                                >
                                    <option value={0}>All Ratings</option>
                                    <option value={3}>3+ Stars</option>
                                    <option value={4}>4+ Stars</option>
                                    <option value={4.5}>4.5+ Stars</option>
                                </select>
                                <Star size={20} className="absolute right-3 top-2.5 text-gray-500 pointer-events-none" />
                            </div>
                            <div className="col-span-full">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
                                <Range
                                    step={0.01}
                                    min={minPrice}
                                    max={maxPrice}
                                    values={priceRange}
                                    onChange={(values) => setPriceRange(values)}
                                    renderTrack={({ props, children }) => (
                                        <div
                                            {...props}
                                            className="w-full h-3 bg-gray-200 rounded-md"
                                        >
                                            {children}
                                        </div>
                                    )}
                                    renderThumb={({ props }) => (
                                        <div
                                            {...props}
                                            className="w-5 h-5 bg-indigo-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        />
                                    )}
                                />
                                <div className="flex justify-between mt-2">
                                    <span>${priceRange[0].toFixed(2)}</span>
                                    <span>${priceRange[1].toFixed(2)}</span>
                                </div>
                            </div>
                            <div className="col-span-full mt-4">
                                <button
                                    onClick={applyFilters}
                                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-150 ease-in-out"
                                >
                                    Apply Filters
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {paginatedData.map((item) => (
                        <div key={item.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                                <p className="text-indigo-600 font-medium mb-3">{item.category}</p>
                                <div className="flex items-center text-gray-600 mb-2">
                                    <Clock size={16} className="mr-2" />
                                    <span>{item.duration}</span>
                                </div>
                                <div className="flex items-center text-gray-600 mb-2">
                                    <BookOpen size={16} className="mr-2" />
                                    <span>{item.level}</span>
                                </div>
                                <div className="flex items-center text-gray-600 mb-3">
                                    <MapPin size={16} className="mr-2" />
                                    <span>{item.location}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <Star className="text-yellow-400" size={20} />
                                        <span className="ml-1 text-gray-700 font-medium">{item.rating.toFixed(1)}</span>
                                    </div>
                                    <div className="text-green-600 font-semibold">
                                        ${item.price.toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-gray-700 mb-4 sm:mb-0">
                        Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} results
                    </p>
                    <div className="flex space-x-2">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 transition duration-150 ease-in-out"
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pageCount))}
                            disabled={currentPage === pageCount}
                            className="px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 transition duration-150 ease-in-out"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;