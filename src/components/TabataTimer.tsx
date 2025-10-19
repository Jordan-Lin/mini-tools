import { createSignal, createEffect, onCleanup } from 'solid-js'

export default function TabataTimer() {
  const [workTime, setWorkTime] = createSignal(20)
  const [restTime, setRestTime] = createSignal(10)
  const [rounds, setRounds] = createSignal(8)
  const [isRunning, setIsRunning] = createSignal(false)
  const [currentRound, setCurrentRound] = createSignal(1)
  const [timeLeft, setTimeLeft] = createSignal(0)
  const [phase, setPhase] = createSignal<'work' | 'rest'>('work')
  const [intervalId, setIntervalId] = createSignal<number | null>(null)

  createEffect(() => {
    if (!isRunning()) return
    
    const id = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          // Phase finished
          if (phase() === 'work') {
            setPhase('rest')
            setTimeLeft(restTime())
          } else {
            setPhase('work')
            setCurrentRound(prev => prev + 1)
            setTimeLeft(workTime())
            
            if (currentRound() >= rounds()) {
              setIsRunning(false)
              setCurrentRound(1)
              setPhase('work')
              setTimeLeft(workTime())
              return 0
            }
          }
          return prev - 1
        }
        return prev - 1
      })
    }, 1000)
    
    setIntervalId(id)
    
    onCleanup(() => {
      if (intervalId()) clearInterval(intervalId()!)
    })
  })

  const startTimer = () => {
    if (!isRunning()) {
      setTimeLeft(workTime())
      setCurrentRound(1)
      setPhase('work')
    }
    setIsRunning(true)
  }

  const pauseTimer = () => {
    setIsRunning(false)
    if (intervalId()) {
      clearInterval(intervalId()!)
      setIntervalId(null)
    }
  }

  const resetTimer = () => {
    setIsRunning(false)
    setCurrentRound(1)
    setPhase('work')
    setTimeLeft(workTime())
    if (intervalId()) {
      clearInterval(intervalId()!)
      setIntervalId(null)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div class="tabata-timer">
      <h2>Tabata Timer</h2>
      
      <div class="timer-settings">
        <div class="setting-group">
          <label for="work-time">Work Time (seconds)</label>
          <input
            id="work-time"
            type="number"
            min="1"
            max="300"
            value={workTime()}
            onInput={(e) => setWorkTime(parseInt(e.currentTarget.value))}
            disabled={isRunning()}
          />
        </div>
        
        <div class="setting-group">
          <label for="rest-time">Rest Time (seconds)</label>
          <input
            id="rest-time"
            type="number"
            min="1"
            max="300"
            value={restTime()}
            onInput={(e) => setRestTime(parseInt(e.currentTarget.value))}
            disabled={isRunning()}
          />
        </div>
        
        <div class="setting-group">
          <label for="rounds">Rounds</label>
          <input
            id="rounds"
            type="number"
            min="1"
            max="20"
            value={rounds()}
            onInput={(e) => setRounds(parseInt(e.currentTarget.value))}
            disabled={isRunning()}
          />
        </div>
      </div>

      <div class="timer-display">
        <div class="phase-indicator" classList={{
          'work': phase() === 'work',
          'rest': phase() === 'rest'
        }}>
          {phase() === 'work' ? 'WORK' : 'REST'}
        </div>
        
        <div class="time-display">
          {formatTime(timeLeft())}
        </div>
        
        <div class="round-info">
          Round {currentRound()} of {rounds()}
        </div>
      </div>

      <div class="timer-controls">
        {!isRunning() ? (
          <button class="btn btn-primary" onClick={startTimer}>
            Start
          </button>
        ) : (
          <button class="btn btn-secondary" onClick={pauseTimer}>
            Pause
          </button>
        )}
        
        <button class="btn btn-outline" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  )
}
