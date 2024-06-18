'use client';

import React, { useEffect, useState } from "react";
import "./feed.css";
import { SelectMode } from "./selectMode/selectMode";
import { Card, Publication } from "./card/card";

export const Feed: React.FunctionComponent = () => {

  const [publications, setPublications] = useState<Publication[]>([]);

  useEffect(() => {
    const eventSource = new EventSource(`http://localhost:8080/publication`);
    eventSource.onmessage = (event) => {
      console.log(JSON.parse(event.data))
      setPublications( queue => {
        const newQueue = [...queue, JSON.parse(event.data)]
        if (newQueue.length > 10) {
          newQueue.shift()
        }
        return newQueue;
      })
    }
    window.addEventListener("beforeunload", () => eventSource.close())
    return () => eventSource.close();
  }, []);

  return <section className="feed-wrapper">
    <SelectMode></SelectMode>

    <div className="feed-container">
      <div className="feed-viewport">
        {publications.reverse().map((p, i) => <Card {...p} key={p.publication_date}></Card>)}
      </div>
    </div>
  </section>
}