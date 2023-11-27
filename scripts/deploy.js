const { ethers } = require("hardhat")

async function main() {
  const lock = await ethers.deployContract(
    "MyNBToken",
    ["0x1D2ca8cbcCec03351860BC74c47987c097a321a4"],
    {}
  )

  await lock.waitForDeployment()

  console.log(`Token: ${lock.target}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
