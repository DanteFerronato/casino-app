import React, { useState } from 'react';

export default function BetParticle(params : {
    multiplier : number,
}) {
    return (
        <p className="bet-particle">{"x"+params.multiplier}</p>
    )
}