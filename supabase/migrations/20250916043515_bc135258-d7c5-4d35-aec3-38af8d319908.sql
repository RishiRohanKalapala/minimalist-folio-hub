-- Create table for project likes/contributions
CREATE TABLE public.project_likes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  project_name TEXT NOT NULL,
  likes_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.project_likes ENABLE ROW LEVEL SECURITY;

-- Create policies for project likes
CREATE POLICY "Project likes are viewable by everyone" 
ON public.project_likes 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can update project likes" 
ON public.project_likes 
FOR UPDATE 
USING (true);

CREATE POLICY "Anyone can insert project likes" 
ON public.project_likes 
FOR INSERT 
WITH CHECK (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_project_likes_updated_at
BEFORE UPDATE ON public.project_likes
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial record for Abhaya project
INSERT INTO public.project_likes (project_name, likes_count) 
VALUES ('abhaya', 0)
ON CONFLICT DO NOTHING;

-- Enable realtime for this table
ALTER TABLE public.project_likes REPLICA IDENTITY FULL;