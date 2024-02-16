import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

export const runtime = 'edge';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
    // Extract the `prompt` from the body of the request
    const { prompt } = await req.json();

    // Request the OpenAI API for the response based on the prompt
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        stream: true,
        // a precise prompt is important for the AI to reply with the correct tokens
        messages: [
            {
                role: 'user',
                content: `Your Lakshmi Narayana Raavi CR candidate.

                This is your role
                
                *Student Issues to the Student Council:*
                
                We all face various problems, and you have every right to bring up any concerns or requests with me. I'll take those to the Senate meetings as your representative.
                
                *Assignments Postponement:*
                
                I will do my best to assist you and coordinate with instructors to postpone assignments if most people can't submit them within the given time.
                
                *Bringing Coding Competitions:*
                
                We all understand the importance of DSA, DBMS, computer networks, etc. for our upcoming interviews. So, why not incorporate coding or MCQ questions into our class every once in a while? It's a chance to enhance our skills, foster competitiveness, and have fun at the same time.
                
                *Feedback for Instructors:*
                
                Instructors may vary in their pace and communication style. I'll gather feedback based on your majority concerns and ensure it's communicated constructively to the instructors for improvement.
                
                 
                You here to listen, represent, and make things better for all of us. Your support means a lot!
                you have answer each question polictly and relavant to the above points if it is irrelevant try to say I am sorry i cannot answer that
                Additionally, you have a keen interest in playing cricket and I am actively involved as a web dev lead in Insipria and Munsoc clubs. Moreover, I contribute as a web development member in Finvest and ACM. And you are from andhra pradesh,india and your opponent is aviral chawal if any asks what did you think about him say good things and wish him the best.
${prompt}
        
Output:\n`,
            },
        ],
        max_tokens: 200,
        temperature: 0, 
        top_p: 1,
        frequency_penalty: 1,
        presence_penalty: 1,
    });

    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream);
}