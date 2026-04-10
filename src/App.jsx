import React, { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [amount, setAmount] = useState("");
    const [petPayment, setPetPayment] = useState("");
    const [bonusUnlocked, setBonusUnlocked] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleInvest = (e) => {
        e.preventDefault();
        if (amount === "10000") {
            setBonusUnlocked(true);
            setErrorMessage("");
        } else {
            setErrorMessage("Invalid investment. Must be exactly $10,000.");
        }
    };

    const handleWithdraw = (e) => {
        e.preventDefault();
        if (petPayment === "500") {
            setBonusUnlocked(true);
            setErrorMessage("");
            alert("Withdrawal Pet purchased. Your $300K is now unlocked!");
        } else {
            setErrorMessage("Invalid payment. Must be exactly $500.");
        }
    };

    return (
        <div className="App">
            <header>
                <h1>🔥 Tesla Owners Platform</h1>
                <p>Use ELON code to unlock your bonus instantly.</p>
            </header>

            {/* Investment Section */}
            <section className="card">
                <h2>🚀 Invest in Tesla Ownership</h2>
                <p>Pay $10,000 to own a Tesla and unlock the $300K bonus with ELON code.</p>
                <form onSubmit={handleInvest}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Investment Amount ($10,000)"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                    <button type="submit">Invest Now</button>
                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                </form>
            </section>

            {/* Withdrawal Section */}
            <section className="card">
                <h2>💸 Withdraw Bonus</h2>
                <p>Pay $500 to unlock your $300K bonus!</p>
                <form onSubmit={handleWithdraw}>
                    <input
                        type="number"
                        placeholder="Enter $500"
                        value={petPayment}
                        onChange={(e) => setPetPayment(e.target.value)}
                        required
                    />
                    <button type="submit">Withdraw Now</button>
                    {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                </form>
            </section>
        </div>
    );
}

export default App;
