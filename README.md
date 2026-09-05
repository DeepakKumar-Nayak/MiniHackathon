<div align="center">

`SHERYIANS CODING SCHOOL`

# Mini Hackathon — Smart Task Manager

### FS 36 Batch | React To-Do Application Challenge

| Duration | Slot | Total Marks | Mode |
|---|---|---|---|
| **2 Hours** | **5:00 PM – 7:00 PM** | **100** | **Individual** |

</div>

---

## ▎Problem Statement

Build a fully functional **To-Do / Smart Task Manager** web application in React that demonstrates strong command over Hooks, Context API, data routing, and clean separation of API logic. The app must persist data across page reloads using `localStorage`, and all API-related calls must go through a dedicated, segregated API layer (not written inline in components).

> Core idea: the app should look and behave like a real production task manager — not just a CRUD demo. Judges will check code structure, hook usage, and routing as closely as the working features.

---

## ▎Mandatory Tech Stack

- `useState` — local UI/form state
- `useEffect` — side effects, sync to storage
- `useContext` — global todo state
- `useCallback` — memoized handlers
- `useRef` — DOM access / input focus
- **Data Routing** — React Router (multi-page navigation)
- `localStorage` — data persistence
- Dedicated Axios instance file for all API calls

---

## ▎Data Routing Requirement

Every submission must implement client-side data routing using `react-router-dom`. This is evaluated separately from the basic feature set.

- Minimum 3 routes: e.g. `/` (All Tasks), `/completed`, `/stats` or similar
- Route-based data filtering the routed page should display data relevant to that route (not just static UI)
- Use of `useParams` / `useNavigate` / dynamic routes is a plus (e.g. `/task/:id` for a task detail view)
- Persisted data (from `localStorage`/Context) must stay in sync across routes

---

## ▎Marking Scheme *(out of 100)*

### ▎ BASIC FEATURES — 50

| FEATURE | MARKS |
|---|---|
| Add new task | 5 |
| Edit existing task | 5 |
| Delete task | 5 |
| Mark task complete / incomplete (toggle) | 5 |
| Render task list dynamically | 5 |
| Filter tasks — All / Active / Completed | 5 |
| Persist data with `localStorage` (survives refresh) | 10 |
| Global state managed via Context API | 5 |
| Basic clean UI / UX styling | 5 |

### ▎ DATA ROUTING — 15

| FEATURE | MARKS |
|---|---|
| React Router setup with minimum 3 routes | 5 |
| Route-based data filtering / display logic | 5 |
| Dynamic route (e.g. `/task/:id`) or navigation via `useNavigate` | 5 |

### ▎ ADVANCED FEATURES — 25

| FEATURE | MARKS |
|---|---|
| Optimized handlers using `useCallback` | 5 |
| `useRef` used meaningfully (e.g. auto-focus input, DOM read) | 5 |
| Custom hooks e.g. `useLocalStorage`, `useTodos` | 5 |
| Segregated API instance (`axios.create`) for all API/data calls | 5 |
| Search / sort functionality | 5 |

### ▎ CODE QUALITY & SUBMISSION — 10

| CRITERIA | MARKS |
|---|---|
| Clean folder structure & readable code | 4 |
| Proper git commits / history | 3 |
| Submitted on time with correct public link | 3 |

| | **Total** |
|---|---|
| | **100** |

---

## ▎Submission Guidelines

- Create a folder inside the **Work Dir** named as `YourName_FS36_TodoHackathon`.
- Push your complete project code into this folder (source files, not just build output).
- Deploy or host your repo publicly (GitHub repo link is mandatory; a live deployed link is a bonus).
- Post the **public link** in the Work Dir before the 2-hour window ends.
- Late submissions or private/inaccessible links will not be evaluated.

---

<div align="center">

*Sheryians Coding School · FS 36 Batch · Mini Hackathon · Build fast, build clean*

</div>