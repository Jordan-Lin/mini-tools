import { createSignal } from 'solid-js'
import TabataTimer from './components/TabataTimer'

export default function App() {
  const [currentPage, setCurrentPage] = createSignal('home')

  return (
    <div class="app">
      <nav class="navbar">
        <div class="nav-brand">
          <h1>Mini Tools</h1>
        </div>
        <div class="nav-links">
          <button 
            class="nav-link" 
            classList={{ active: currentPage() === 'home' }}
            onClick={() => setCurrentPage('home')}
          >
            Home
          </button>
          <button 
            class="nav-link"
            classList={{ active: currentPage() === 'tabata' }}
            onClick={() => setCurrentPage('tabata')}
          >
            Tabata Timer
          </button>
        </div>
      </nav>
      
      <main class="main-content">
        {currentPage() === 'home' && (
          <div class="home">
            <h2>Welcome to Mini Tools</h2>
            <p>A collection of useful tools for your daily needs.</p>
            <div class="tools-grid">
              <button 
                class="tool-card" 
                onClick={() => setCurrentPage('tabata')}
              >
                <h3>Tabata Timer</h3>
                <p>High-intensity interval training timer</p>
              </button>
              {/* More tools will be added here */}
            </div>
          </div>
        )}
        
        {currentPage() === 'tabata' && <TabataTimer />}
      </main>
    </div>
  )
}
