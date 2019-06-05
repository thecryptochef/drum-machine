import React from 'react';

export default function ControlScreen({
  power,
  setPower,
  vol,
  setVol
}) {
  return (
    <>
      <div className="powerbtn-wrap">
        <button
          id="power_btn"
          className={
            power
              ? 'powerbtn on'
              : 'powerbtn'
          }
          onClick={() => setPower(!power)}
        >
          <i class="fas fa-power-off" />
        </button>
      </div>
      <div className="volume-container">
        <label>
          <i class="fa fa-volume-up"> </i>
        </label>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          id="volume"
          defaultValue={vol}
          onChange={e =>
            setVol(Number(e.target.value))
          }
        />
      </div>
      <div>
        <span id="volume-display">
          VOLUME : {Math.round(vol * 100)}
        </span>
      </div>
    </>
  );
}
