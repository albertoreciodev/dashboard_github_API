import { useEffect, useState } from "react";
import { GitHubRepository } from "../../domain/GitHubRepository";
import { GitHubRepositoryRepository } from "../../domain/GitHubRepository_Repository";

export const useGitHubRepositories = (repository: GitHubRepositoryRepository, repositoryUrls: string[]): {repositoryData: GitHubRepository[]; isLoading: boolean;} => {

    const [repositoryData, setRepositoryData] = useState<GitHubRepository[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
      setIsLoading(true)
      repository
        .search(repositoryUrls)
        .then((repositoryData) => {
          console.log("Dashboard=====useEffect repositoryData", repositoryData);
          setRepositoryData(repositoryData);
          setIsLoading(false)
        });
    }, [repository, repositoryUrls]);


    return { repositoryData, isLoading }
}