// factory contract address
// router contract address
// tokens from which we want to fetch the price
// herewe are using pancake swap which is working on baunance chain
 
const factoryAddress="0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f"; // googlwe factory address uniswapv2  it will be on bsc binance smart chain
const routerAddress="0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"; // Router v2 on uniswapv2
const fromAddress="0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";  //WETH
const toAddress="0x6B175474E89094C44Da98b954EedeAC495271d0F";   //DAI

module .exports={
    factoryAddress,
    routerAddress,
    fromAddress,
    toAddress
}

