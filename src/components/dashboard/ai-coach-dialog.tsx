
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Radio } from "lucide-react";
import { supabase } from '@/lib/supabase';
import { toast } from "@/components/ui/use-toast";
import { useUser } from "@/contexts/user-context";

export function AiCoachDialog() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { user } = useUser();

  const handleAskCoach = async () => {
    if (!question.trim()) {
      toast({
        title: "Empty question",
        description: "Please enter a question for the AI coach",
        variant: "destructive"
      });
      return;
    }

    try {
      setLoading(true);
      // Call your Supabase Edge Function for AI processing
      const { data, error } = await supabase.functions.invoke('ask-coach', {
        body: { 
          question,
          userId: user?.id
        }
      });

      if (error) throw error;
      
      setResponse(data.response || "I'm sorry, I couldn't process your question. Please try again.");
    } catch (error) {
      console.error('Error asking coach:', error);
      toast({
        title: "Error",
        description: "Failed to get a response from the AI coach. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-full text-gray-600 dark:text-gray-400 border-gray-200 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800">
          <Radio className="h-4 w-4 mr-2" />
          Ask Coach
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ask AI Coach</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="question">Your Question</Label>
            <Textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask about exercise form, nutrition advice, or training tips..."
              rows={4}
            />
          </div>
          {response && (
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <Label>Coach's Response:</Label>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{response}</p>
            </div>
          )}
          <Button onClick={handleAskCoach} disabled={loading} className="w-full">
            {loading ? "Thinking..." : "Ask Coach"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
