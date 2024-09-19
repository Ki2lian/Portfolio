import { useState } from 'react';
import { useCopyToClipboard } from '@uidotdev/usehooks';

import { DiscordIcon } from '@/components/icons/DiscordIcon';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const DiscordCopyButton = () => {
    const [ isCopied, setIsCopied ] = useState(false);
    const [ _, copyToClipboard ] = useCopyToClipboard();

    const discordUsername = 'ki2lian';

    const handleCopy = (event: React.MouseEvent) => {
        event.preventDefault();
        copyToClipboard(discordUsername);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <TooltipProvider delayDuration={ 100 }>
            <Tooltip>
                <TooltipTrigger onClick={ handleCopy } onMouseDown={ event => event.preventDefault() }>
                    <DiscordIcon className="cursor-pointer transition-transform hover:scale-110" size={ 36 } />
                </TooltipTrigger>
                <TooltipContent
                    onPointerDownOutside={ event => {
                        event.preventDefault();
                    } }
                >
                    <p>{ isCopied ? 'Copié !' : 'Copier le pseudo Discord' }</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default DiscordCopyButton;
