"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { useCallback, useEffect, useState } from "react";
import { LuPause, LuPlay } from "react-icons/lu";

import { ProjectItem } from "@/app/(home)/(projects)/Item";
import { Button } from "@/components/ui/button";
import { Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TProjectWithImageValid } from "@/schemas";

interface MobileProjectsCarouselProps {
    projects: TProjectWithImageValid[];
}

export const MobileProjectsCarousel = ({ projects }: MobileProjectsCarouselProps) => {
    const [ api, setApi ] = useState<CarouselApi>(undefined);
    const [ isPlaying, setIsPlaying ] = useState(true);

    const toggleAutoplay = useCallback(() => {
        if (!api) return;

        const autoScrollPlugin = api.plugins()?.autoScroll;
        if (!autoScrollPlugin) return;

        if (autoScrollPlugin.isPlaying()) {
            autoScrollPlugin.stop();
            setIsPlaying(false);
        } else {
            autoScrollPlugin.play();
            setIsPlaying(true);
        }
    }, [ api ]);

    useEffect(() => {
        if (!api) return;

        const autoScrollPlugin = api.plugins()?.autoScroll;
        if (!autoScrollPlugin) return;

        setIsPlaying(autoScrollPlugin.isPlaying());
        const onPlay = () => setIsPlaying(true);
        const onStop = () => setIsPlaying(false);

        api.on("autoScroll:play", onPlay)
            .on("autoScroll:stop", onStop)
            .on("reInit", () => setIsPlaying(autoScrollPlugin.isPlaying()));

        return () => {
            api.off("autoScroll:play", onPlay).off("autoScroll:stop", onStop);
        };
    }, [ api ]);

    return (
        <Carousel
            opts={{
                loop: true,
                watchDrag: true,
            }}
            plugins={ [
                AutoScroll({
                    speed: 0.75,
                    startDelay: 0,
                }),
            ] }
            setApi={ setApi }
        >
            <CarouselContent>
                {projects.map((project, idx) => (
                    <CarouselItem className="basis-1/1 sm:basis-1/2" key={ idx }>
                        <ProjectItem project={ project } />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="relative flex justify-end items-center gap-2 mt-4 mr-4">
                <CarouselPrevious className="static translate-x-0 translate-y-0" disabled={ isPlaying } />
                <Button className="rounded-full size-8" onClick={ toggleAutoplay } size="icon" variant="outline">
                    {isPlaying ? <LuPause className="size-4" /> : <LuPlay className="size-4" />}
                    <span className="sr-only">{isPlaying ? "Pause" : "Play"} autoscroll</span>
                </Button>
                <CarouselNext className="static translate-x-0 translate-y-0" disabled={ isPlaying } />
            </div>
        </Carousel>
    );
};
