import React from 'react';
import { FaRegBookmark } from 'react-icons/fa';

const RecipeOfTheDay = () => {
    const recipes = [
        {
            title: 'Italian-style tomato',
            time: '6 minutes',
            img: '../public/img1.jfif'
        },
        {
            title: 'Spaghetti with vegetables and shrimp',
            time: '25 minutes',
            img: '../public/img2.jfif'
        },
        {
            title: 'Lotus delight salad',
            time: '20 minutes',
            img: '../public/img3.jfif'
        },
        {
            title: 'Snack cakes',
            time: '27 minutes',
            img: '../public/img4.jfif'
        },
    ];
    const videoRecipes = [
        {
            title: 'Salad with cabbage and shrimp',
            time: '25 minutes',
            img: '../public/img5.jfif'
        },
        {
            title: 'Salad of cove beans, shrimp and potatoes',
            time: '20 minutes',
            img: '../public/img6.jfif'
        },
        {
            title: 'Sunny-side up fried egg',
            time: '15 minutes',
            img: '../public/img7.jfif'
        },
        {
            title: 'Lotus delight salad',
            time: '20 minutes',
            img: '../public/img8.jfif'
        },
    ];
    const editorsPicks = [
        {
            title: 'Stuffed sticky rice ball',
            time: '24 minutes',
            author: 'Jennifer King',
            description: 'Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...',
            img: '../public/img9.jfif'
        },
        {
            title: 'Strawberry smoothie',
            time: '40 minutes',
            author: 'Matthew Martinez',
            description: 'Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...',
            img: '../public/img10.jfif'
        },
        {
            title: 'Latte Art',
            time: '18 minutes',
            author: 'Sarah Hill',
            description: 'Latte art is the skillful craft of creating captivating designs on the surface of a latte...',
            img: '../public/img11.jfif'
        },
        {
            title: 'Butter fried noodles',
            time: '10 minutes',
            author: 'Julia Lopez',
            description: 'Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...',
            img: '../public/img12.jfif'
        },
    ];
    return (
        <>
            <div
                className="relative bg-cover bg-center h-[500px] flex items-center justify-center"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1050&q=80')"
                }}
            >
                {/* Card nội dung */}
                <div className="bg-white/90 p-6 rounded-xl shadow-xl w-96 text-center relative z-10">
                    <div className="text-xs bg-yellow-300 text-gray-700 font-semibold inline-block px-3 py-1 rounded-full mb-3">
                        Recipe of the day
                    </div>
                    <h2 className="text-xl font-bold text-pink-600 mb-2">Salad Caprese</h2>
                    <p className="text-gray-600 text-sm mb-4">
                        Classic Italian Salad Caprese uses tomatoes, fresh mozzarella, fresh
                        basil, olive oil and balsamic vinegar to create a refreshing dish for
                        lunch or appetizer.
                    </p>
                    <div className="flex items-center justify-center mb-4">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/7015/7015063.png"
                            alt="Salad"
                            className="w-8 h-8 rounded-full mr-2"
                        />
                        <span className="text-sm font-medium text-gray-800">Salad Caprese</span>
                    </div>
                    <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full text-sm transition">
                        View now →
                    </button>
                </div>

                {/* Lớp overlay nếu cần làm mờ nền */}
                <div className="absolute inset-0 bg-black/20 z-0"></div>

            </div>

            <section className="px-6 py-12 bg-white">
                {/* Tiêu đề */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-pink-600 mb-2">This Summer Recipes</h2>
                    <p className="text-gray-600 text-sm">We have all your Independence Day sweets covered.</p>
                </div>

                {/* Danh sách món */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {recipes.map((recipe, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
                        >
                            <img
                                src={recipe.img}
                                alt={recipe.title}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-sm font-semibold text-gray-800">{recipe.title}</h3>
                                <FaRegBookmark className="text-pink-500" />
                            </div>
                            <p className="text-pink-500 text-xs">{recipe.time}</p>
                        </div>
                    ))}
                </div>
            </section>


            <section className="px-6 py-12 bg-white">
                {/* Tiêu đề */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-pink-600 mb-2">Recipes With Videos</h2>
                    <p className="text-gray-600 text-sm">Cooking Up Culinary Creations with Step-by-Step Videos</p>
                </div>

                {/* Danh sách món */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {videoRecipes.map((recipe, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
                        >
                            <img
                                src={recipe.img}
                                alt={recipe.title}
                                className="w-full h-40 object-cover rounded-md mb-4"
                            />
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-sm font-semibold text-gray-800">{recipe.title}</h3>
                                <FaRegBookmark className="text-pink-500" />
                            </div>
                            <p className="text-pink-500 text-xs">{recipe.time}</p>
                        </div>
                    ))}
                </div>
            </section>

            
            <section className="px-6 py-12 bg-white">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-pink-600 mb-2">Editor's pick</h2>
                    <p className="text-gray-600 text-sm">
                        Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
                    {editorsPicks.map((item, index) => (
                        <div
                            key={index}
                            className="flex bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-28 h-28 object-cover rounded-md mr-4"
                            />
                            <div className="flex flex-col justify-between flex-1">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-sm font-semibold text-gray-800">{item.title}</h3>
                                        <FaRegBookmark className="text-pink-500" />
                                    </div>
                                    <p className="text-gray-400 text-xs mb-1">{item.time}</p>
                                    <p className="text-sm text-gray-500 leading-snug">{item.description}</p>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">
                                    👤 <span className="font-medium">{item.author}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>  

        </>

    );
};

export default RecipeOfTheDay;
