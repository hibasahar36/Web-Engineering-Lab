import React from 'react'
import Card from './Card'

const Main = () => {
    return (
        <main>
            <Card
                title="Web Engineering"
                body="I can build static webpages using html and css and also make them responsive using javascript. currently I am learning react. My goal is to be a full stack dev."
            />
            <Card
                title="Machine Learning"
                body="I can build models with that run on a single ML algorithim, I understand the mathematics behind those algorithims. I can also tune hyperparameters."
            />
            <Card
                title="Fast Learner"
                body="I quickly grasp new technologies and programming paradigms, seamlessly adapting to everything from complex backend logic to modern web frameworks. I thrive on diving into unfamiliar technical challenges and efficiently translating them into clean, functional code."
            />
        </main>
    )
}

export default Main