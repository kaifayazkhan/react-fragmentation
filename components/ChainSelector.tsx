interface ChainSelectorProps {
    title: string;
    openChainSelector: boolean;
    setOpenChainSelector: (open: boolean) => void;
    chains: any[];
    selectedChain: any;
    setSelectedChain: (chain: any) => void;
}

const ChainSelectorComponent: React.FC<ChainSelectorProps> = (
    {
        title,
        openChainSelector,
        setOpenChainSelector,
        chains,
        selectedChain,
        setSelectedChain,
    }) => {

    // Fake filler component

    return (
        <div>
            <p>{title}</p>
        </div>
    );
};

export default ChainSelectorComponent;
