import Image from "next/image";
import OpenAI from 'openai';
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        <p>Select a painting theme:</p>
        <select title="theme">
            <option value="abstract">Abstract</option>
            <option value="landscape">Landscape</option>
            <option value="portrait">Portrait</option>
            <option value="still-life">Still Life</option>
        </select>
        <button type="submit" className="btn border-black border-1">Generate Painting Description</button>
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
