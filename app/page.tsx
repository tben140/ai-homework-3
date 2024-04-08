"use client";
import Image from "next/image";
import OpenAI from 'openai';
import { useState } from 'react';
import axios from 'axios';

const handleGeneratePaintingDescription = async (event) => {
    event.preventDefault();
    // const theme = event.target.theme.value;
    const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY});
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "Painting Describer", content: "Describe the Landscape painting theme" }],
        model: "gpt-3.5-turbo",
    });
    console.log("chatCompletion.data", chatCompletion);
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        <form onSubmit={handleGeneratePaintingDescription}>
        <p>Select a painting theme:</p>
        <select title="theme">
            <option value="abstract">Abstract</option>
            <option value="landscape">Landscape</option>
            <option value="portrait">Portrait</option>
            <option value="still-life">Still Life</option>
        </select>
        <button type="submit" className="btn border-black border-1">Generate Painting Description</button>
        </form>
        <p>Painting Description:</p>
        <p>Painting Title: Abstract Painting</p>
        <p>Painting Description: This is an abstract painting.</p>
        <form action="/painting" method="post">
            <input type="hidden" name="theme" value="abstract" />
        </form>
        <button type="submit" className="btn border-black border-1">Generate Painting Image</button>
        <div className="painting">
            <Image
                src="/painting.jpg"
                alt="Painting"
                width={500}
                height={500}
            />
        </div>
    </main>
  );
}
