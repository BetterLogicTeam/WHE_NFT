import React, { useEffect, useState } from "react";
import "./Mint.css";
import { HiChevronDoubleRight } from "react-icons/hi";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { loadWeb3 } from "../../apis/api";
import { wireNftContractAbi, wireNftContractAddress } from '../../utilies/constant';
import { busdNftTokenAddress, busdNftTokenAbi } from '../../utilies/constant'
import { wireTokenAddress, wireTokenAbi } from '../../utilies/constant'
import { toast } from "react-toastify";

function Mint() {


    let [value, setValue] = useState(1)
    let [point, setPoint] = useState(0);
    let [mintPriceBnb, setMintPriceBnb] = useState(0);
    let [mintPriceBUSD, setMintPriceBUSD] = useState(0);
    let [mintPriceWire, setmintPriceWire] = useState(0);
    let [btnOne, setButtonOne] = useState("Mint With BNB");
    let [btnTwo, setButtonTwo] = useState("Mint With WHE");
    let [btnThree, setButtonThree] = useState("Mint With Busd")



    const increaseValue = () => {
        if (value < 5) {
            setValue(++value)
            console.log("setValue", value)
        }

    }

    const decreaseValue = () => {
        if (value > 1) {
            setValue(--value)
            console.log("setValue", value)
        }

    }


    const myMintBNB = async () => {
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to test net")
        } else {
            try {

                setButtonOne("Please Wait While Processing")
                console.log("mintFor BNB");
                const web3 = window.web3;
                let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);



                let totalnft = await nftContractOf.methods.MaxLimitPerTransaction().call();

                console.log("totalnft", totalnft);

                if (value > totalnft) {
                    toast.error(`Maximum Limit is ${totalnft} `)
                } else {
                    let maxSupply = await nftContractOf.methods.maxsupply().call();

                    let ttlSupply = await nftContractOf.methods.totalSupply().call();
                    let paused = await nftContractOf.methods.paused().call();
                    let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
                    let mintingbnbPrice = await nftContractOf.methods.MinitngPricein_MATIC().call()
                    console.log("jjjjj", mintingbnbPrice);
                    mintingbnbPrice = web3.utils.fromWei(mintingbnbPrice);
                    mintingbnbPrice = parseFloat(mintingbnbPrice)
                    setMintPriceBnb(mintingbnbPrice)
                    let totalMintingPriceBNB = value * mintingbnbPrice
                    console.log("valuehere", value);
                    console.log("ttlSupply", maxLimitprTransaction);

                    console.log("mintingbnbPrice", mintingbnbPrice);

                    let llisted_check = await nftContractOf.methods.iswhitelist(acc).call()
                    console.log("iswhitelist", llisted_check);



                    if (llisted_check == 'true') {
                        if (parseInt(ttlSupply) < parseInt(maxSupply)) {
                            if (paused == false) {
                                if (value < parseInt(maxLimitprTransaction)) {
                                    console.log("Minting Value= ", value);
                                    console.log("Minting totalMintingPriceBNB= ", totalMintingPriceBNB);

                                    totalMintingPriceBNB = web3.utils.toWei(totalMintingPriceBNB.toString())
                                    await nftContractOf.methods.mint_with_MATIC(value).send({
                                        from: acc,
                                        value: totalMintingPriceBNB.toString()

                                    })
                                    toast.success("Transaction Confirmed")
                                    setButtonOne("Mint With BNB")

                                } else {
                                    toast.error("No of Minting is Greater than maximum limit Per Transaction")
                                    setButtonOne("Mint With BNB")

                                }
                            } else {
                                toast.error("Paused is False")
                                setButtonOne("Mint With BNB")

                            }

                        } else {
                            toast.error("Max Supply is Greater than total Supply")
                            setButtonOne("Mint With BNB")

                        }
                    }
                    else {
                        let BusdPrice = await nftContractOf.methods.WhitelistMintingPricein_MATIC().call();

                        await nftContractOf.methods.mint_with_MATIC(value).send({
                            from: acc,
                            value: value * BusdPrice.toString()
                        })


                        toast.error(" Please White Listed Address")
                        setButtonOne("Mint With BNB")


                    }
                }






            } catch (e) {
                console.log("Error while minting ", e)
                toast.error("Transaction failed")
                setButtonOne("Mint With BNB")

            }

        }
    }
    const myMintWire = async () => {
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to test net")
        } else {
            try {
                setButtonTwo("Please Wait While Processing")
                console.log("mintFor Wire");
                const web3 = window.web3;
                let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
                let wireContractOf = new web3.eth.Contract(wireTokenAbi, wireTokenAddress);
                let totalnft = await nftContractOf.methods.MaxLimitPerTransaction().call();

                console.log("totalnft", totalnft);

                if (value > totalnft) {
                    toast.error(`Maximum Limit is ${totalnft} `)
                } else {
                    let userBusdBalance = await wireContractOf.methods.balanceOf(acc).call();
                    userBusdBalance = web3.utils.fromWei(userBusdBalance)
                    let maxSupply = await nftContractOf.methods.maxsupply().call();
                    let ttlSupply = await nftContractOf.methods.totalSupply().call();
                    let paused = await nftContractOf.methods.paused().call();
                    let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
                    let mintingWirePrice = await nftContractOf.methods.MinitngPricein_MMX().call()
                    mintingWirePrice = web3.utils.fromWei(mintingWirePrice);
                    mintingWirePrice = parseFloat(mintingWirePrice)
                    setmintPriceWire(mintingWirePrice);
                    let totalMintingPriceWire = value * mintingWirePrice
                    console.log("maxSupply", maxSupply);
                    console.log("ttlSupply", maxLimitprTransaction);

                    console.log("mintingWirePrice", mintingWirePrice);
                    let llisted_check = await nftContractOf.methods.iswhitelist(acc).call()
                    console.log("iswhitelist", llisted_check);
                    console.log("Minting Value= ", value);



                    if (llisted_check == 'true') {

                        if (parseInt(ttlSupply) < parseInt(maxSupply)) {
                            if (paused == false) {
                                if (value < parseInt(maxLimitprTransaction)) {
                                    if (parseFloat(userBusdBalance) >= totalMintingPriceWire) {
                                        console.log("Minting Value= ", value);
                                        console.log("Minting totalMintingPriceWire= ", totalMintingPriceWire);

                                        totalMintingPriceWire = web3.utils.toWei(totalMintingPriceWire.toString())
                                        await wireContractOf.methods.approve(wireNftContractAddress, totalMintingPriceWire).send({
                                            from: acc
                                        })
                                        toast.success("Transaction Confirmed")
                                        setButtonTwo("Please Wait for Second Confirmation")
                                        await nftContractOf.methods.mint_with_MMX(value, totalMintingPriceWire.toString()).send({
                                            from: acc,
                                        })
                                        toast.success("Transaction Succefful")
                                        setButtonTwo("Mint With WHE")

                                    } else {
                                        toast.error("Out Of Balance")
                                        setButtonTwo("Mint With WHE")

                                    }

                                } else {
                                    toast.error("No of Minting is Greater than maximum limit Per Transaction")
                                    setButtonTwo("Mint With WHE")

                                }
                            } else {
                                toast.error("Paused is False")
                                setButtonTwo("Mint With WHE")

                            }

                        } else {
                            toast.error("Max Supply is Greater than total Supply")
                            setButtonTwo("Mint With WHE")

                        }

                    }
                    else {

                        let BusdPrice = await nftContractOf.methods.WhitelistMinitngPricein_MMX().call();
                        totalMintingPriceWire = web3.utils.toWei(totalMintingPriceWire.toString())
                        await wireContractOf.methods.approve(wireNftContractAddress, totalMintingPriceWire).send({
                            from: acc
                        })
                        let a = web3.utils.fromWei(BusdPrice);
                        a = parseFloat(a)
                        let b = a * value;
                        let c = web3.utils.toWei(b.toString());

                        await nftContractOf.methods.mint_with_MMX(value, c).send({
                            from: acc,
                        })


                        setButtonTwo("Mint With WHE")


                    }
                }



            } catch (e) {
                console.log("Error while minting ", e)
                toast.error("Transaction failed")
                setButtonTwo("Mint With WHE")

            }

        }
    }
    const myMintBUSD = async () => {
        let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to test net")
        } else {
            try {
                setButtonThree("Please Wait While Processing")
                console.log("mintFor BUSD");
                const web3 = window.web3;
                let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
                let busdContractOf = new web3.eth.Contract(busdNftTokenAbi, busdNftTokenAddress);
                // let userBusdBalance = await busdContractOf.methods.balanceOf(acc).call();
                // console.log("maxSupply",busdContractOf);

                // userBusdBalance = web3.utils.fromWei(userBusdBalance)
                let totalnft = await nftContractOf.methods.MaxLimitPerTransaction().call();

                console.log("totalnft", totalnft);
                if (value > totalnft) {
                    toast.error(`Maximum Limit is ${totalnft} `)
                } else {
                    let maxSupply = await nftContractOf.methods.maxsupply().call();
                    let ttlSupply = await nftContractOf.methods.totalSupply().call();
                    let paused = await nftContractOf.methods.paused().call();
                    let maxLimitprTransaction = await nftContractOf.methods.MaxLimitPerTransaction().call();
                    let mintingBusdPrice = await nftContractOf.methods.MinitngPricein_BUSD().call()
                    mintingBusdPrice = web3.utils.fromWei(mintingBusdPrice);
                    mintingBusdPrice = parseFloat(mintingBusdPrice)
                    setMintPriceBUSD(mintingBusdPrice)
                    let totalMintingPriceBusd = value * mintingBusdPrice
                    console.log("maxSupply", maxSupply);
                    console.log("ttlSupply", maxLimitprTransaction);
    
                    console.log("mintingBusdPrice", mintingBusdPrice);
    
                    let llisted_check = await nftContractOf.methods.iswhitelist(acc).call()
                    console.log("iswhitelist", llisted_check);
    
    
                    if (llisted_check == 'true') {
    
    
                        if (parseInt(ttlSupply) < parseInt(maxSupply)) {
                            if (paused == false) {
                                if (value < parseInt(maxLimitprTransaction)) {
                                    // if (parseFloat(userBusdBalance) >= totalMintingPriceBusd) {
                                    console.log("Minting Value= ", value);
                                    console.log("Minting totalMintingPriceWire= ", totalMintingPriceBusd);
    
                                    totalMintingPriceBusd = web3.utils.toWei(totalMintingPriceBusd.toString())
                                    await busdContractOf.methods.approve(wireNftContractAddress, totalMintingPriceBusd).send({
                                        from: acc
                                    })
                                    setButtonThree("Please Wait For Second Confirmation")
                                    toast.success("Transaction Confirmed")
                                    await nftContractOf.methods.mint_with_BUSD(value, totalMintingPriceBusd.toString()).send({
                                        from: acc,
                                    })
                                    setButtonThree("Mint With Busd")
                                    toast.success("Transaction Succefful")
    
                                    // } else {
                                    //     toast.error("Out Of Balance")
                                    //     setButtonThree("Mint With Busd")
    
                                    // }
    
                                } else {
                                    toast.error("No of Minting is Greater than maximum limit Per Transaction")
                                    setButtonThree("Mint With Busd")
    
                                }
                            } else {
                                toast.error("Paused is False")
                                setButtonThree("Mint With Busd")
    
                            }
    
                        } else {
                            toast.error("Max Supply is Greater than total Supply")
                            setButtonThree("Mint With Busd")
    
                        }
                    }
                    else {
                        let BusdPrice = await nftContractOf.methods.WhitelistMinitngPricein_BUSD().call();
                        totalMintingPriceBusd = web3.utils.toWei(totalMintingPriceBusd.toString())
                        await busdContractOf.methods.approve(wireNftContractAddress, totalMintingPriceBusd).send({
                            from: acc
                        })
                        let a = web3.utils.fromWei(BusdPrice);
                        a = parseFloat(a)
                        let b = a * value;
                        let c = web3.utils.toWei(b.toString());
                        await nftContractOf.methods.mint_with_BUSD(value, c).send({
                            from: acc,
                        })
    
                        setButtonThree("Mint With Busd")
    
    
                    }
                }
                


            } catch (e) {
                console.log("Error while minting ", e)
                toast.error("Transaction failed BUSD")
                setButtonThree("Mint With Busd")

            }

        }
    }




    const [users, setUsers] = useState([])


    const getMydata = async () => {
        let acc = await loadWeb3();
        // console.log("ACC=",acc)


        try {
            console.log("mintFor BUSD");
            const web3 = window.web3;
            let nftContractOf = new web3.eth.Contract(wireNftContractAbi, wireNftContractAddress);
            let mintingBusdPrice = await nftContractOf.methods.MinitngPricein_BUSD().call()
            mintingBusdPrice = web3.utils.fromWei(mintingBusdPrice);
            mintingBusdPrice = parseFloat(mintingBusdPrice)
            setMintPriceBUSD(mintingBusdPrice)

            let mintingWirePrice = await nftContractOf.methods.MinitngPricein_MMX().call()
            mintingWirePrice = web3.utils.fromWei(mintingWirePrice);
            mintingWirePrice = parseFloat(mintingWirePrice)
            setmintPriceWire(mintingWirePrice);

            let mintingbnbPrice = await nftContractOf.methods.MinitngPricein_MATIC().call()
            mintingbnbPrice = web3.utils.fromWei(mintingbnbPrice);
            mintingbnbPrice = parseFloat(mintingbnbPrice)
            setMintPriceBnb(mintingbnbPrice)


            //   let livebnbprice = await ("https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT")





            //   mintingbnbPrice = web3.utils.fromWei(mintingbnbPrice);
            //   mintingbnbPrice = parseFloat(mintingbnbPrice)


        } catch (e) {
            console.log("Error while getting minting Price");
        }

    }





    useEffect(() => {
        setInterval(() => {
            getMydata();

        }, 10000);
        getMydata();

    }, [])



    return (
        <div>
            <div className="mint">
                <div className="container">
                    <h1>MINT</h1>
                    {
                        console.log("adfdsf", users)

                    }
                    <div className="row mt-5">
                        <div className="">
                            <div className="row">
                                <div className="col-md-5">
                                    <div class="mint-image welcome-thumb mb-50 item">
                                        <img src="z100084.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="mint-content">
                                        <div className="mint-item">
                                            <div className="quantity">
                                                <div className="">
                                                    {/* <span className="arw" onClick={() => decreaseValue()}>
                            <HiChevronDoubleLeft />
                          </span> */}
                                                    <input className="count-form" type="text" value={value} onChange={(e) => setValue(e.target.value)} id="qtyBox" />
                                                    {/* <span className="arw2" onClick={() => increaseValue()}>
                            <HiChevronDoubleRight/>
                          </span> */}
                                                </div>
                                                <div className="top_div_here">
                                                    <div className="btn-area1 mt-5">
                                                        <a class="btn btn-box" href="#" onClick={() => myMintBNB()}>
                                                            {btnOne}
                                                        </a>
                                                        <p className="fs-4">Price : {mintPriceBnb} BNB</p>
                                                    </div>
                                                    <div className="btn-area1 mt-5">
                                                        <a class="btn btn-box" href="#" onClick={() => myMintWire()}>
                                                            {btnTwo}
                                                        </a>
                                                        <p className="fs-4">Price : {mintPriceWire} WHE</p>
                                                    </div>
                                                    <div className="btn-area1 mt-5">
                                                        <a class="btn btn-box" href="#" onClick={() => myMintBUSD()}>
                                                            {btnThree}
                                                        </a>
                                                        <p className="fs-4">Price : {mintPriceBUSD} BUSD</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mint;
