import { FileBlockProps, getLanguageFromFilename } from "@githubnext/blocks";
import { Button, Box, Heading, Text } from "@primer/react";
import "./index.css";
import YouTube from "react-youtube";
import { CodingTrainVideo } from "../../types";
import { useRef } from "react";

export default function ExampleFileBlock(props: FileBlockProps) {
  const { context, content, metadata, onUpdateMetadata } = props;

  const data: CodingTrainVideo = JSON.parse(content);

  const youtubeVideo = useRef<any>(null);

  return (
    <Box p={4}>
      <Heading as="h1">{data.title}</Heading>
      <Text>{data.description}</Text>
      {/* <YouTube
        videoId={data.videoId}
        ref={youtubeVideo}
        opts={{
          playerVars: {
            autoplay: 0,
            rel: 0,
          },
        }}
      /> */}
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${data.videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {/* list groupLinks, credits, codeExamples */}
      <Box>
        <h2>Links</h2>
        {data.groupLinks.map((linkGroup) => (
          <Box>
            <h3>{linkGroup.title}</h3>
            <ul>
              {linkGroup.links.map((link) => (
                <li>
                  <a href={link.url} target="_blank">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
