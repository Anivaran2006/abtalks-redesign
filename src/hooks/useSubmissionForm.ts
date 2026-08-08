import { useState, useCallback } from 'react';
import { useConfetti } from './useConfetti';

export function useSubmissionForm() {
  const [githubUrl, setGithubUrl] = useState("");
  const [commitUrl, setCommitUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  const { triggerConfetti } = useConfetti();

  const validate = useCallback(() => {
    const newErrors: { [key: string]: string } = {};
    
    if (!githubUrl) newErrors.github = "GitHub URL is required.";
    else if (!githubUrl.includes("github.com")) newErrors.github = "Must be a valid GitHub URL.";

    if (!commitUrl) newErrors.commit = "Commit URL is required.";
    else if (!commitUrl.includes("github.com") || !commitUrl.includes("/commit/")) {
      newErrors.commit = "Must be a valid GitHub commit URL.";
    }

    if (!linkedinUrl) newErrors.linkedin = "LinkedIn post URL is required.";
    else if (!linkedinUrl.includes("linkedin.com/posts/")) {
      newErrors.linkedin = "Must be a valid LinkedIn post URL.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [githubUrl, commitUrl, linkedinUrl]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      triggerConfetti();
    }, 1500);
  }, [validate, triggerConfetti]);

  return {
    githubUrl, setGithubUrl,
    commitUrl, setCommitUrl,
    linkedinUrl, setLinkedinUrl,
    isSubmitting,
    isSuccess, setIsSuccess,
    errors, setErrors,
    handleSubmit
  };
}