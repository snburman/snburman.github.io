package main

import (
	"context"
	"log"
	"net/http"

	"github.com/kitkitchen/fncmp"
)

func init() {
	c := fncmp.Config{
		LogLevel: fncmp.Error,
	}
	c.Set()
}

func HandleIndex(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "static/index.html")
}

func HandleTest(w http.ResponseWriter, r *http.Request) {
	c := Index()
	c.Render(r.Context(), w)
}

func HandleTestFn(ctx context.Context) fncmp.FnComponent {
	item := fncmp.HTML("<h1>Test</h1>")
	return fncmp.NewFn(ctx, item)
}

type Task struct {
	Name     string `json:"name"`
	Complete bool   `json:"complete"`
}

func handleSubmit(ctx context.Context) fncmp.FnComponent {
	task, err := fncmp.EventData[Task](ctx)
	if err != nil {
		return fncmp.NewFn(ctx, nil)
	}

	cache, err := fncmp.UseCache[[]Task](ctx, "tasks")
	if err != nil {
		return fncmp.FnErr(ctx, err)
	}
	tasks := cache.Value()
	tasks = append(tasks, task)
	cache.Set(tasks)

	item := fncmp.HTML("<li>" + task.Name + "</li>")
	fn := fncmp.NewFn(ctx, item)
	return fn.AppendElement("tasks")
}

func HandleMainFn(ctx context.Context) fncmp.FnComponent {
	form := fncmp.HTML(`
		<form>
			<input id='name' name='name' type='text' required/>
			<button type='submit'>Add Task</button>
		</form>
	`)
	fn := fncmp.NewFn(ctx, form).WithEvents(handleSubmit, fncmp.OnSubmit)
	return fn.AppendTag("main")
}

func main() {
	mux := http.NewServeMux()
	mux.Handle("/", http.FileServer(http.Dir("static")))
	mux.Handle("/main", fncmp.MiddleWareFn(HandleIndex, HandleMainFn))
	mux.Handle("/test", fncmp.MiddleWareFn(HandleTest, HandleTestFn))
	log.Fatal(http.ListenAndServe(":8080", mux))
}
