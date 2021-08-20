from app.models import Task
from django import forms

class TaskForm(forms.Form):
    title = forms.CharField()
    description = forms.CharField(widget = forms.Textarea)

class TaskModelForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = ('title', 'description')
