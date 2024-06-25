"use client";

import { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export default function TokenizePage() {
  const [text, setText] = useState("");
  const [tokens, setTokens] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `/api/tokenize?text=${encodeURIComponent(text)}`
      );
      const data = await response.json();

      if (response.ok) {
        setTokens(data.tokens);
      } else {
        setError(data.error || "An error occurred");
      }
    } catch (error) {
      setError("An error occurred");
    }

    setLoading(false);
  };

  return (
    <Card className="p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text to tokenize"
          rows={4}
          cols={50}
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Tokenizing..." : "Tokenize"}
        </Button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {tokens.length > 0 && (
        <div>
          <ul className="flex flex-col gap-2">
            {tokens.map((token, index) => (
              <li key={index} className="text-sm font-mono text-green-500">
                {token}
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
}
